module.exports = async (req: any, res: any, _next: any) => {
    res.render('users/blogtext', {title: req.session.userName});
};