module.exports = function() {
    if (!req.user.isAdmin) return res.status(403).send('Access denied (bitch).');

    next();
}