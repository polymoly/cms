import App from "./App";
import { ConfigProvider, Layout } from "antd";
import { QueryClientProvider, QueryClient } from "react-query";
import { BrowserRouter as Router } from "react-router-dom";
import "antd/dist/antd.css";
import "./baseStyles";

const { Content } = Layout;

const client = new QueryClient({
  defaultOptions: {
    mutations: {
      retry: 0,
    },
    queries: {
      retry: 0,
    },
  },
});

export const AppProvider = () => {
  return (
    <Router>
      <QueryClientProvider client={client}>
        <ConfigProvider direction="rtl">
          <Layout style={{ height: "100vh", overflow: "hidden", padding: 24 }}>
            <Content>
              <App />
            </Content>
          </Layout>
        </ConfigProvider>
      </QueryClientProvider>
    </Router>
  );
};
