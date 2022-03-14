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