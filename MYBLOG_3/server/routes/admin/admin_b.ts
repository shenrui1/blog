module.exports = async (_req: any, res: any, _next: any) => {
    let blog = await require('../admin').Blog_admin.searchAll();

    res.json(blog)
};