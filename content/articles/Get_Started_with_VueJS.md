---
title: Get Started with VueJS
description: Get started with JavaScript framework VueJS
img: https://snipcart.com/media/10175/what-is-vuejs-definition.png
alt: Vuejs Logo
featured: true
tags: Development
Keywords: Vue, VueJS, JavaScript, JavaScript Framework, Web Development, Website Development, installing vue, installing vuejs, vue components, vue router
pinterestImg: https://i.ibb.co/3CLcZF2/Get-Started-With-Vuejs.png
pinAlt: Get Started with VueJS Pinterest Image Pin it
youtube: false
youtubeSrc:
---

## Introduction

### Prerequisites

You should be aware of the following concepts before reading this:

- Basic command line knowledge
- Basic JavaScript knowledge
- Install NodeJS

Recommended Articles to read before this one are:

- No previous articles to this one

### What is VueJS?

Vue JS is a front-end JavaScript framework which operates mainly at the View layer of the Model View Controller. Created by Evan You who was an ex-employee at Google, VueJS was named from the French translation of View. 

Mentioned in the same breath as Angular which is a comprehensive framework created by Google, and React, a popular JavaScript library created by Facebook, it's punching above its weight to compete against these heavyweight tech companies. 

Vue can be easily integrated into the front-end of a big project, it makes use of many similar features as Angular and React such as Directives and the Virtual DOM, and its organised into a template structure that makes use of HTML, CSS and JavaScript.

## Getting Started with VueJS

There are two ways you can use Vue in your application, either by adding a CDN link to your HTML file and integrating it to an existing project, or by installing the CLI and starting a project. Both ways are discussed further below.

### Integration

Integrating Vue into an existing project, using it to practice implementing Vue concepts or prototyping is easy because you can just add the Vue library CDN link to start using it.

Create an HTML file and add the following script to the header:

```markup[integrate.html]
<head>
	<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"><script>
</head>
```

In the main body of the html file we can now add a div with the id of app to the location we want to manipulate in the document. 

```markup[integrate.html]
<body>
	<div id="app"></div>
</body>
```

At the bottom of our document before the closing body tag, we can add script tags where we will link up with the app id and create a Vue instance:

```markup[integrate.html]
<script>
	const vApp = new Vue({
		el: '#app',
		data: {
			name: "Camdev"
		}
	});
</script>
```

We can now use string interpolation in our div with an id of "app" to output whatever data is stored in our Vue instance. This is shown below:

```markup[integrate.html]
<body>
	<div id="app"> {{ name }} </div>
</body>
```

Open your HTML file and you should now see your name output in the browser. VueJS uses the MVVM model which is Model-View-View-Model. The model is whatever is stored as a value under the data property. The view is the output the user will see which in this example will be under the div with the id of app which outputs the name value, and the view-model will be whatever manipulation to the data occurs between the data and the view. 

We can use other keywords in our Vue instance to manipulate the data before it is output in the view. Other keywords we can use are methods, computed and watch. 

### Vue CLI 3

There are two versions of the Vue CLI which are Vue CLI 2 and 3. There are a few differences in terms of setup but both use the Vue library in the same way, so syntax and concepts remain the same. I will be using the Vue CLI 3 in this example. 

Before installing the Vue CLI you need to have [Node](https://nodejs.org/en/download/) installed. Further instructions on how to do that are on the website. You may already have it installed which you can check by typing in you command line <span style="color: red">`node --version`</span>. If you see a version number then it's installed already. 

Once installed we can use the node package manager (npm) to install the Vue CLI with the following command:

```console[console]
npm install -g @vue/cli
```

Once the Vue CLI is installed we now have access to the Vue command, so you can navigate to a folder you want your Vue app to be stored using the command line. Once you reach the folder of your choosing, to create the application you can type in the following command:

```console[console]
vue create my-project
```

my-project will be the name you choose for your Vue app. Once you run that command you will be prompted to select a preset, default or manual. If you choose the manual option you can select some packages to include in the app, such as Vue-router, but these can still be installed later using npm. Vue will then install the required dependency files for the app. 

Vue will initialise it as a git repository. You might receive a prompt asking if you would like to add the node modules to the .git-ignore file, select yes, because then if you're uploading to Github for example, you don't want to clutter the upload with all the Node files aswell.

Once the app is created, you can navigate into the my-project folder in the command line and enter <span style="color: red">`npm run serve`</span> into the console.

If everything is working as it should then you will see a prompt in the command line - <span style="color: blue">`Local: http://localhost: 8080/`</span>. 

Hold down the command key for mac (*or shift key for Windows*) and click on the http link and this should open your new Vue project in the browser. The page will now show your changes live as you save your files letting you see how your changes are affecting the application.

The page you will see is below:

<img src="https://cdn-media-1.freecodecamp.org/images/bRNk-GcCDW-4lhpwg3wEjbE9NgfImcTEFMFj" alt="VueJS LocalHost screen" class="noPin">

You are now ready to start building your application.

Now that you have the CLI installed and are able to set up the initial application, you should open your text editor of choice and open the folder you created. I would recommend using Visual Studio Code. You will now be able to see the folder structure which is shown below:

<img src="https://i.ibb.co/MpN3JKB/Screenshot-2020-06-19-at-10-27-00.png" alt="VueJS initial folder structure" class="noPin">

**public > index.html**

The index.html file will be the page that renders your application as a single page. You won't need to do anything with this file because the files with the application content are all passed to the main.js file which then passes it to the index.html file to render. 

If you want to include CDNs such as Bootstrap or Google Fonts, then include them in this file. 

The favicon.ico is the icon which appears next the title of the page. 

**src > main.js **

The main.js file will be where you can import certain dependencies or add code you want to access globally.

**src > App.vue**

The App.vue file is a component, but it is also the root component. This will be the location where all other components will flow towards. 

Once all the components are linked to the App.vue file, the consolidated content is passed to the main.js file which is then passed to the index.html file. 

You can delete the content between the template tags, the import of the component in the script tags, the content contained in the <span style="color: red">`export default { }`</span>, and the styles.

**src > components > HelloWorld.vue**

This file is a demo component. What you will notice from this file is the structure of a component. There are three sections: the template, the script and the style. 

You will see in the script tags that the component is exported with the name default. This is then imported into the script tags of the App.vue file. 

You can delete the HelloWorld.vue file completely and add your own component files. You can also delete the logo in the assets folder.

## Summary of Key Points

After completing this article, you will now know what Vue is, how to integrate it into an existing project, how to set up the Vue CLI and the initial folder structure.

## Next Steps

Now that you know the process to create a new Vue app, the next thing to learn about is the Vue Router which allows you to be able to navigate between web pages. 

## Related Articles 

- Further articles to be added in the future