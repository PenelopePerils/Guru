import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';
import Blog from './blog';
import Directory from './directory';
import Shop from './shop';




const Main = () => 
    <Switch>
       <Route exact path="/" component={LandingPage} />
       <Route path="/aboutme" component={AboutMe} />
       <Route exact path="/contact" component={Contact} />
       <Route exact path="/projects" component={Projects} />
       <Route exact path="/resume" component={Resume} />
       <Route exact path="/blog" component={Blog} />
       <Route exact path="/directory" component={Directory} />
       <Route exact path="/shop" component={Shop} />
    
    </Switch>
    

export default Main;