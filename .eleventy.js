module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('images');
    eleventyConfig.addPassthroughCopy('admin');

    eleventyConfig.addCollection('posts', collection => {
        return collection
            .getFilteredByGlob('posts/*.md')
            .sort((a, b) => (Number(a.data.displayOrder) > Number(b.data.displayOrder) ? 1 : -1));
    });
};