---
layout: ../../layouts/MarkdownWorkLayout.astro
title: "pxTally"
pubDate: "2026-03-09"
description: "画像のピクセルを色空間ごとに分類し、集計するCLIツール。"
repository: "https://github.com/tukinami/pxtally"
isReleased: true
thumbnail: /assets/no-image_x256.png
thumbnailAlt: "pxTally サムネイル: 専用画像なし"
ogpDescription: "画像のピクセル集計CLIツール「pxTally」の紹介ページ。"
tags: ["Rust", "CLIツール"]
---

## 概要

画像内のピクセルを色空間ごとに分類し、集計するCLIツールです。Rust製。

イラストや写真の色傾向を把握したいときに活用できます。

## できること

- 画像内のピクセルを色空間ごとに分類し、集計結果を出力する
- 集計結果を整形テキストまたはJSON形式で出力する
- OKLCH色空間で画像の色を変更し、新しい画像として出力する

## 出力例

HSLのhueについて集計した結果:

<pre>
PS path\to\pxtally> pxtally.exe hsl hue --path C:\Users\Public\Pictures\something.png
hsl hue
   0.00 ->   30.00 :   8.98% (     94208 px)
  30.00 ->   60.00 :   8.69% (     91136 px)
  60.00 ->   90.00 :   8.79% (     92160 px)
  90.00 ->  120.00 :   7.71% (     80896 px)
 120.00 ->  150.00 :   7.71% (     80896 px)
 150.00 ->  180.00 :   8.69% (     91136 px)
 180.00 ->  210.00 :   8.79% (     92160 px)
 210.00 ->  240.00 :   7.71% (     80896 px)
 240.00 ->  270.00 :   7.71% (     80896 px)
 270.00 ->  300.00 :   8.69% (     91136 px)
 300.00 ->  330.00 :   8.79% (     92160 px)
 330.00 ->  360.00 :   7.71% (     80896 px)

 avr :  177.7155
</pre>