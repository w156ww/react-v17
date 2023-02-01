const config = {
    hash: true,

    routes: [
        {
            path: "/",
            component: "@/",
            routes: [
                {
                    path: "/home",
                    component: "@/pages/App",
                },
                {
                    path: "/movie",
                    component: "@/pages/movie",
                },
            ],
        },
    ],
};

export default config;
