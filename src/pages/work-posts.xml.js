import rss, { pagesGlobToRssItems }from "@astrojs/rss";

export async function GET(context) {
    return rss({
        title: "tukinami.github.io - 制作物",
        description: "月波清火の制作物のRSS。",
        site: context.site,
        items: await pagesGlobToRssItems(
            import.meta.glob("./works-posts/*.md"),
        ),
    });
}
