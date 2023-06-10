import "@/styles/globals.css";
import theme from "@/theme";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import type { NextComponentType } from "next";
import { appWithTranslation } from "next-i18next";
import { ProviderRpcClient, Address } from "everscale-inpage-provider";
import { EverscaleStandaloneClient } from "everscale-standalone-client";
import { VenomConnect } from "venom-connect";
import { useEffect, useState } from "react";
import { useConnectWallet } from "@/store/wallet";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import _ from "lodash";

const queryClient = new QueryClient();

export type NextPageWithLayout = NextComponentType & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const initTheme = "dark" as const;

export const standaloneFallback = () =>
  EverscaleStandaloneClient.create({
    connection: {
      id: 1002,
      group: "venom_testnet",
      type: "jrpc",
      data: {
        endpoint: "https://jrpc-devnet.venom.foundation/",
      },
    },
    // initInput: "../../node_modules/nekoton-wasm/nekoton_wasm_bg.wasm",
  });

const initVenomConnect = async () => {
  return new VenomConnect({
    theme: initTheme,
    checkNetworkId: 1002,
    providersOptions: {
      venomwallet: {
        links: {},
        walletWaysToConnect: [
          {
            // NPM package
            package: ProviderRpcClient,
            packageOptions: {
              fallback:
                VenomConnect.getPromise("venomwallet", "extension") ||
                (() => Promise.reject()),
              forceUseFallback: true,
            },
            packageOptionsStandalone: {
              fallback: standaloneFallback,
              forceUseFallback: true,
            },

            // Setup
            id: "extension",
            type: "extension",

            // name: "Custom Name",
            // logo: "",

            // High-level setup
            // options: ,
            // connector: ,
            // authConnector: ,
          },
        ],
        defaultWalletWaysToConnect: [
          // List of enabled options
          "mobile",
          "ios",
          "android",
        ],
      },
      //
      // Temporarily hidden Ever wallet
      //
      // everwallet: {
      //   links: {
      //     qr: null,
      //   },
      //   walletWaysToConnect: [
      //     {
      //       // NPM package
      //       package: ProviderRpcClient,
      //       packageOptions: {
      //         fallback:
      //           VenomConnect.getPromise("everwallet", "extension") ||
      //           (() => Promise.reject()),
      //         forceUseFallback: true,
      //       },
      //       packageOptionsStandalone: {
      //         fallback: standaloneFallback,
      //         forceUseFallback: true,
      //       },
      //       id: "extension",
      //       type: "extension",
      //     },
      //   ],
      //   defaultWalletWaysToConnect: [
      //     // List of enabled options
      //     "mobile",
      //     "ios",
      //     "android",
      //   ],
      // },
    },
  });
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || ((page: React.ReactNode) => page);
  const setBalance = useConnectWallet((state) => state.setBalance);
  const setAddress = useConnectWallet((state) => state.setAddress);
  const setLoading = useConnectWallet((state) => state.setLoading);
  const setVenomConnect = useConnectWallet((state) => state.setVenomConnect);
  const setVenomProvider = useConnectWallet((state) => state.setVenomProvider);

  const [venomConnectLib, setVenomConnectLib] = useState<VenomConnect>();

  const getAddress = async (provider: ProviderRpcClient) => {
    const providerState = await provider?.getProviderState?.();

    const address =
      providerState?.permissions.accountInteraction?.address.toString();

    return address;
  };

  const getBalance = async (provider: ProviderRpcClient, _address: string) => {
    try {
      const providerBalance = await provider?.getBalance?.(
        new Address(_address)
      );
      return providerBalance;
    } catch (error) {
      return undefined;
    }
  };

  const checkAuth = async (_venomConnect: VenomConnect) => {
    const auth = await _venomConnect?.checkAuth();
    if (auth) await getAddress(_venomConnect as any);
  };

  const onInitButtonClick = async () => {
    setLoading(true);
    const initedVenomConnect = await initVenomConnect();
    setVenomConnectLib(initedVenomConnect);
    setVenomConnect(initedVenomConnect);

    await checkAuth(initedVenomConnect);
    setLoading(false);
  };

  const check = async (_provider: ProviderRpcClient) => {
    await _provider.ensureInitialized();
    const _address = _provider ? await getAddress(_provider) : undefined;
    const _balance =
      _provider && _address ? await getBalance(_provider, _address) : undefined;

    setAddress(_address);
    setBalance(_balance ? _.toNumber(_balance) / 1e9 : 0);

    if (_provider && _address)
      setTimeout(() => {
        check(_provider);
      }, 100);
  };

  const onConnect = async (provider: ProviderRpcClient) => {
    setVenomProvider(provider);
    check(provider);
  };

  useEffect(() => {
    const off = venomConnectLib?.on("connect", onConnect);
    return () => {
      off?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [venomConnectLib]);

  useEffect(() => {
    !venomConnectLib && onInitButtonClick();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [venomConnectLib]);

  return (
    <ChakraProvider resetCSS theme={theme}>
      <QueryClientProvider client={queryClient}>
        {getLayout(<Component {...pageProps} />)}
      </QueryClientProvider>
    </ChakraProvider>
  );
};

export default appWithTranslation(App);
