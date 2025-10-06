---
layout: ../../layouts/MarkdownWorkLayout.astro
title: "ukagaka-dll-macro"
pubDate: "2025-01-02"
description: "デスクトップマスコット、「伺か」用DLLのためのマクロ集。"
repository: "https://github.com/tukinami/ukagaka-dll-macro"
isReleased: false
thumbnail: /assets/no-image_x256.png
thumbnailAlt: "ukagaka-dll-macro サムネイル: 専用画像なし"
ogpDescription: "Rustライブラリ「ukagaka-dll-macro」の紹介ページ。"
tags: ["伺か", "Rust", "Rustライブラリ"]
---

デスクトップマスコット、「伺か」用DLLのためのマクロ集です。

伺かのDLLに使われるload、request、unloadと、DLLのエントリポイントであるDllMainを定義するマクロがあります。

おまけで、Dllへのパスを返す関数 read_dll_path_string も定義しています。