# React.js - Next.js Fully Functional Portfolio/Blog Website
With this repo, you can build yourself a beautiful portfolio, blog website.
It is fully responsible and functional.

## Get Started
Continue by following the steps.
After all of them it'll work for you!

### Requirements
```
A CMS service (I recommend Sanity free version),
A compiler (I recommend Visual Studio Code),
Simple compiler, react.js and next.js information,
Buymeacoffee.com account
```

### Create CMS Project
Register sanity with this link https://www.sanity.io/get-started

Generate Sanity files in your project with this type:
`npm install -g @sanity/cli && sanity init`

Connect your account and fill project name to devportfolio
(don't change "product" name)

Fill other blanks

After that go your Sanity folder > schemas > schema.js,
paste this:

```
// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    {
      title: "Achivs",
      name: "achivs",
      type: "document",
      fields: [
        {
          title: "Achivement",
          name: "achivement",
          type: "string",
        },
        {
          title: "Year",
          name: "year",
          type: "string",
        },
      ],
    },
    {
      title: "Blog",
      name: "blog",
      type: "document",
      fields: [
        {
          title: "Title",
          name: "title",
          type: "string",
        },
        {
          title: "Category",
          name: "category",
          type: "string",
        },
        {
          title: "Slug",
          name: "slug",
          type: "slug",
        },
        {
          title: "Content",
          name: "content",
          type: "text",
        },
        {
          title: "Excerpt",
          name: "excerpt",
          type: "string",
        },
        {
          title: "Image",
          name: "image",
          type: "image",
        },
        {
          title: "Tags",
          name: "tags",
          type: "array",
          of: [{type: 'string'}]
        },
        {
          title: "Creator",
          name: "creator",
          type: "string",
          options: {
            list: [
              {title: 'Emirhan Kursun', value: 'Emirhan Kursun'},
            ], // <-- predefined values
            layout: 'radio' // <-- defaults to 'dropdown'
          }
        },
      ],
    },
    {
      title: "Project",
      name: "project",
      type: "document",
      fields: [
        {
          title: "Title",
          name: "title",
          type: "string",
        },
        {
          title: "Description",
          name: "description",
          type: "string",
        },
        {
          title: "Image",
          name: "image",
          type: "image",
        },
        {
          title: "Source",
          name: "source",
          type: "url",
        },
        {
          title: "Demo",
          name: "demo",
          type: "url",
        },
        {
          title: "Tags",
          name: "tags",
          type: "array",
          of: [{type: 'string'}]
        },
        {
          title: "Project Type",
          name: "projectType",
          type: "string",
          options: {
            list: [
              {title: 'Game', value: 'Game'},
              {title: 'Active', value: 'Active'},
              {title: 'Simple', value: 'Simple'},
            ], // <-- predefined values
            layout: 'radio' // <-- defaults to 'dropdown'
          }
        },
      ],
    },
  ]),
});
```

Then create `.env` file to your root folder and paste this (if you deploy on Vercel App, you will type this 2 value to environment values):

```
# For Studio Locally
SANITY_STUDIO_API_PROJECT_ID = "YOUR_PROJECT_ID_FROM_SANITY_WEBSITE"
SANITY_STUDIO_API_DATASET = "production"

# For Next Locally
NEXT_PUBLIC_SANITY_PROJECT_ID = "YOUR_PROJECT_ID_FROM_SANITY_WEBSITE"
NEXT_PUBLIC_SANITY_DATASET = "production"
```

NOTE: Change inside of apostrophe to your project id.

Then;

Go to `your.domain/studio/desk`, create contents.

### Open Project and Start to Regulations
Fork this project,

Download and unzip project to anywhere you want, then open Visual Studio Code and open your folder.

After that go to `Pages`>`index.js` file and edit the section below the comment sections.
Check other `.js` files from `Pages` section and change them for your informations.

For example:
![example](https://i.ibb.co/cwbW1MJ/green.png)

After changes don't forget to commit your data.

### Testing and Deploying
Go terminal, type `npm run dev` and click enter.
Open your browser and go `http://localhost:3000` (the port can be different for you it's 3000 usually).

And see what's working and what's not. If you have to change somewhere you can edit the files from Visual Studio Code.
For deploying, if you are still in developer mode; go to terminal and press `CTRL + C` after that press `Y`.
Type `npm run build` to your terminal and click enter. If everything will go correct, you will see an `out` folder in your project.

>This folder will contain your base files to deploy your website. Copy them to your hosting or Apache server directly. (I recommend Vercel app for deploying)

That's it! Congratulations you've got your portfolio/blog website. 🎉🎉🎉
Live Demo: https://nextjs-blog-portfolio.vercel.app/

If you have some trouble you can contact me with [this](https://t.me/scalebit) telegram link or *krsn.emirhan@gmail.com* email address.
