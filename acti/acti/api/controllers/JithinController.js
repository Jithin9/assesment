/**
 * JithinController
 *
 * @description :: Server-side logic for managing jithins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var password;
var email;

module.exports = {
	


  /**
   * `JithinController.index()`
   */



  /**
   * `JithinController.create()`
   */
  create: function (req, res) {
    Jithin.create(req.params.all(),function usercreated(err,jithin){
      if(err){
        console.log(err);
        return res.redirect('jithin/register');
      }
      console.log("User created (using model jithin): " +  jithin.name);
      return res.redirect('/');
    })

  },

register: function (req,res){
  res.view();
},
  login: function(req,res)
  {
    //   return res.login({
    //   email: req.param('email'),
    //   password: req.param('password'),
    //   successRedirect: '/',
    //   //invalidRedirect: '/jithin/login'
    // });
res.view();

  },
  attempt: function(req,res){

    if(!req.param('email') || !req.param('password')){
      res.redirect('jithin/login');
    }
    Jithin.findOneByEmail(req.param('email'),function(err,user){
        if(err){
         next();
         console.log(err);
       }
       if(!user){
          console.log("no such user");
       }
       else{
        if(user.password == req.param('password')){
          res.redirect('jithin/home/' + user.id);
        }
       }


    });
  //  email: req.param('email');
  //     password: req.param('password');
  //     console.log(email);
  // return res.redirect('jithin/home');

  },

home: function(req,res)
{
  Jithin.findOne(req.param('id'),function findjithin(err,user){
      //if(err) next();
      if(!user) res.redirect('/404');
      res.view({user:user});
  });

},
  done: function(req,res)
  {
    res.redirect('/');
  }



};

