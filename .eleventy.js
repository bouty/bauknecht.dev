export default function(eleventyConfig) {
    //eleventyConfig.addPassthroughCopy();
    return {
        dir: {
            input: "src",
            output: "dist",
            data: "_data",
            includes: "_includes",
            layouts: "_layouts",
        }
    }
};