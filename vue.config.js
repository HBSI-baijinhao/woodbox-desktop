module.exports = {
  pluginOptions: {
    electronBuilder: {
      customFileProtocol: "woodbox://./",
      builderOptions: {
        productName: "一个木函工具箱",
        appId: "cn.woobx.desktop",
        copyright: "Copyright 2020 @星月工作室",
        asar: true,
        win: {
          icon: "./public/icon.png",
          target: [
            {
              target: "nsis",
              arch: ["x64", "ia32"]
            },
            {
              target: "zip",
              arch: ["x64", "ia32"]
            },
            {
              target: "portable",
              arch: ["x64", "ia32"]
            }
          ]
        },
        nsis: {
          oneClick: false,
          allowToChangeInstallationDirectory: true
        },
        linux: {
          icon: "./public/icon.png",
          category: "System",
          target: ["deb", "snap", "AppImage"]
        },
        publish: [
          {
            provider: "generic",
            url: "https://www.woobx.cn"
          }
        ]
      }
    }
  }
};
