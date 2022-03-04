# React.js - Next.js Fully Functional Portfolio/Blog Website
With this repo, you can build yourself a beautiful portfolio, blog website.
It is fully responsible and functional.

## Get Started
Continue by following the steps.
After all of them it'll work for you!

### Requirements
```
A CMS service (I recommend GraphCMS free version),
A compiler (I recommend Visual Studio Code),
Simple compiler, react.js and next.js information,
Buymeacoffee.com account
```

### Create CMS Project
First create 3 Schema named `Blog`, `Project` and `Achivements`
After that go `Blog` schema and create:
1. Single line text => Named: Title
2. Single line text => Named: Category
3. Slug => Named: Slug
4. Rich text => Named: Content
5. Multi line text => Named: Excerpt
6. Asset picker => Named: Featured Image
7. Single line text => Named: Tags (Check "Allow multiple values" option)
Go Enumerations and add one Enumeration named Creators then add the names of the people who will write the blog later. 
After that add to Blog schema:
8. Dropdown => Named: Creator

Then go to `Project` schema and create:
1. Single line text => Named: Title
2. Multi line text => Named: Description
3. Asset picker => Named: Image
4. Single line text => Named: Source
5. Single line text => Named: Tags (Check "Allow multiple values" option)

Then go to `Achivements` schema and create:
1. Single line text => Named: Name
2. Single line text => Named: Year

After all of them go `Project Settings` > `API Access` from left bar and answer the "Would you like us to initialize some defaults?" question by clicking the "Yes, initialize defaults" button. (for GraphCMS service)

> I recommend that create some content after this process for see it's running well 😊.

### Open Project and Start to Regulations
Fork this project,

Download and unzip project to anywhere you want, then open Visual Studio Code and open your folder.
Go to `.env.local` file (if you don't have create it) and put your API key there from API Access panel.

![localenv](https://i.ibb.co/5FvRLsc/envlocal.png)

After that go to `Pages`>`index.js` file and edit the section below the comment sections.
Check other `.js` files from `Pages` section and change them for your informations.

For example:
![example](https://i.ibb.co/cwbW1MJ/green.png)

After changes don't forget to fetch your data.

### Testing and Deploying
Go terminal, type `npm run dev` and click enter.
Open your browser and go `http://localhost:3000` (the port can be different for you it's 3000 usually).

And see what's working and what's not. If you have to change somewhere you can edit the files from Visual Studio Code.
For deploying, if you are still in developer mode; go to terminal and press `CTRL + C` after that press `Y`.
Type `npm run build` to your terminal and click enter. If everything will go correct, you will see an `out` folder in your project.

>This folder will contain your base files to deploy your website. Copy them to your hosting or Apache server directly.

That's it! Congratulations you've got your portfolio/blog website. 🎉🎉🎉
Live Demo: https://nextjs-blog-portfolio.vercel.app/

If you have some trouble you can contact me with [this](https://t.me/scalebit) telegram link or *krsn.emirhan@gmail.com* email address.
