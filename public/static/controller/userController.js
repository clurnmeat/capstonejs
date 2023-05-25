require( 'module' );
const questionDb = ["What is a mason really?", "How do they work?"]

module.exports = {
    addTodb:( req, res ) =>
    {
        let data = req.params.question
        questionDb.push({data})
        res.status( 200 ).send( `Your question of "${data}" has been sent to our offices.\n\nWe will reply to as many as possible by updating this site.` )
        return;
    
    },
    getHomePage: ( req, res ) =>
    {
        res.sendFile( path.join( __dirname, '../public/' ) )
        return;
    },
    
}