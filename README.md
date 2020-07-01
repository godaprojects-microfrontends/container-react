# Container for react based micro frontend.
This is the container for the microfrontend apps.

Based on Cam Jackson's demo on microfrontends - https://github.com/micro-frontends-demo and https://martinfowler.com/articles/micro-frontends.html

##### Notes:
1. Why do you require react-app-rewired? Because it lets you change default webpack configs without ejecting. Ejecting can cause millions of files to be added to your app which become very difficult to manage. So we can pick and choose what we want to override without ejecting. Also note that this project is not recommended by the creator himself - Tim Arney. See https://github.com/timarney/react-app-rewired. Use next.js or Razzle instead. But what about projects which dont want to do SSR? Have to check these out later. Cam jackson seems to have used this project and created the react-app-rewire-micro-frontends project over it (https://github.com/camjackson/react-app-rewire-micro-frontends) to disable single chunk creation (have to understand further why) and also make react and react-dom external dependencies rather than as a part of each and every project (which I understand)