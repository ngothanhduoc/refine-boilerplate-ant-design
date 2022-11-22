import React from "react";

import { Refine } from "@pankod/refine-core";
import { notificationProvider, ReadyPage, ErrorComponent } from "@pankod/refine-antd";

import dataProvider from "@pankod/refine-simple-rest";
import routerProvider from "@pankod/refine-react-router-v6";
import { RefineKbarProvider } from "@pankod/refine-kbar";
import "styles/antd.less";
import { Title, Header, Sider, Footer, Layout, OffLayoutArea } from "components/layout";
import { PostList, PostCreate, PostEdit, PostShow } from "pages/posts";

function App() {
  return (
    <RefineKbarProvider>
      <Refine
        dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
        notificationProvider={notificationProvider}
        ReadyPage={ReadyPage}
        catchAll={<ErrorComponent />}
        Title={Title}
        Header={Header}
        Sider={Sider}
        Footer={Footer}
        Layout={Layout}
        OffLayoutArea={OffLayoutArea}
        routerProvider={routerProvider}
        resources={[
          {
            name: "posts",
            list: PostList,
            create: PostCreate,
            edit: PostEdit,
            show: PostShow,
          },
        ]}
      />
    </RefineKbarProvider>
  );
}

export default App;
