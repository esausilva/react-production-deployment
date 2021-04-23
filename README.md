# React Production Deployment

The repo contains examples on how to deploy your React application to Netlify, Now and Heroku.

Each directory is a separate project containing all the necessary code to deploy to each platform and we deploy the same app to the different platforms.

## The App

The React app is very basic in nature, it calls an Express.js and/or Lambda Functions API with only one `POST` route and one `GET` route.

The `GET` route returns _“Hello from Express”_ and the `POST` route is just one field that when posting it returns _“I received your POST request. This is what you sent me: [from input]”_.

The app also has client side routing with React Router that navigates to a secondary page and displays a _404 page_ when we enter a URL that does not exist.

You can see the app below

![React Production Deploy Demo App](https://i.imgur.com/AcPRAN1.gif "React Production Deploy Demo App")

Upon loading, React calls the Express.js and/or Lambda Function `GET` endpoint and displays a message. When submitting the single field form, React calls the Express.js and/or Lambda Function `POST` endpoint and displays a message.

## The Tutorials

- [Netlify](https://esausilva.com/2020/07/26/deploy-a-production-react-app-to-netlify/)
- [Vercel](https://esausilva.com/2020/07/26/deploy-a-production-react-app-to-vercel/)
- [Heroku](https://esausilva.com/2020/07/26/deploy-a-production-react-app-to-heroku/)

## Giving Back

If you would like to support my work and the time I put into making tutorials, consider getting me a coffee by clicking on the image below. I would really appreciate it!

[![Buy Me A Coffee](https://www.buymeacoffee.com/assets/img/custom_images/black_img.png)](https://www.buymeacoffee.com/esausilva)

-Esau
