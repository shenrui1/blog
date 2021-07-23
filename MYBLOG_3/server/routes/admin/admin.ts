module.exports = async (_req: any, res: any, _next: any) => {
    let user = await require('../admin').User_user.searchAll();

    res.json(user)
};