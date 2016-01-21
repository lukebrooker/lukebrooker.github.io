---
title: 'Future Friendly Style Guides'
category: articles
created: '2012-03-03'
date: "2012-03-03T22:12:03.284Z"
---

There has been a lot of talk of responsive design workflow, layout, sensors and more lately, especially with the recent #responsivesummit hubbub. And why wouldn't there be, with all the excitement and potential surrounding responsive design, we are now starting to see it implemented in larger businesses and across a border range of projects. So what's the problem?
OK there are many, and we are making progress, but the one I've been thinking about is… Workflow. Our current workflow doesn't seem to work... or flow. And more specifically in our workflow, how is this site going to "look/work/function/respond"? And how do we get to that quickly?

## We are moving so fast

I feel like with every project I am doing things slightly differently, trying to find the most optimal way to implement a responsive design at the same time as getting client feedback/approval and communicating the vision/goals/experience of the project to the rest of the team. I have been making progress with my workflow (this talk is a very broad, top down view of some my approach, which has already slightly changed) and the main steps I see now at getting something in front of client quickly include:

- Wire-frames - sketched only, with multiple widths.
- First Stage Prototyping - very top level, mostly for a live feel of the layout from the wireframes, but able to be seen on many devices.
- Style Tiles - I am open to other methods here, but this seems to be the best use of Photoshop and to get a feel of what the site should look/feel like before jumping in to "designing in the browser".

And the focus of this article…

## A Style Guide

So why a style guide? I know these have been used in the past but are usually written near the end of the project, to give and overview of how everything should look. After it has been designed. Well, the best answer I have come up with, is this from Anna Debenham (Who has had some great things to say on this topic):

> Websites are systems rather than pages and as soon as we stop perceiving them as that, the better.

So instead of thinking of the "system" you are building as single pages that each have a different version for each screen size, think of if more like one space that has expanding and contracting regions(header, sidebar etc), in each of these regions is where you put the building blocks(elements and components) that also expand and contract. A style guide is where you can assemble all these elements and components.

## Elements, Components and Patterns.

In the past most online style guides have included the basic elements of a website. Headers, basic typography, forms and other standard html elements were part of this. We still need these but as the web becomes inherently more responsive, we are seeing a greater need for guidelines in the design of components (elements that together form it's own peice of content or functionality).

One obvious example is navigation menus. Usually formed with the new nav element and then an unordered list containing links. The way we display this has generally been in the form of a horizontal or vertical bar.

![Horizontal Menu](/uploads/horizontal-menu.jpg)

This is what we call a design pattern, these are not new either. But recently I have noticed a greater focus on patterns, especially when it comes to mobile patterns, as these are fairly new.

![Mobile Menu](/uploads/mobile-menu.jpg)

So now, with responsive design, we have the same component being used but with a different design pattern depending on it's environment.

People are realising this and I think it is why we have started to see more pattern libraries and pattern collection tools. Recently Dan Cederholm released his responsive Wordpress theme "Pears", which lets you collect your own pieces of html and css for your your own pattern library. Not long before that Jeremy Keith released a simpler version of this same idea called "Pattern Primer", which is purely a php script with that compiles a folder of html files into a single page of patterns. Then you have your prototyping libraries like Foundation and Twitter Bootstrap that contain plenty of their own patterns, but also function sort of like a style guide.

Back to style guides, the two things that sparked my interest in this topic were Anna Debenham's 24 Ways article and Kyle Neath's Knyle Style Sheets. The first of which explains the many benefits of creating a style guide in our current environment and second is specification on how to document your CSS as well as a ruby gem to pass the documentation and create a "living style guide".

## An Idea
All of these tools, libraries and articles cumulated in an idea. What if in the responsive design workflow, we could have a dynamic, documented style guide that can be generated from new and established patterns which could be a starting point for each project and then customised accordingly. So taking ideas from each of the tools I had seen I created Pattern Response, a project similar in structure to Jeremy Keith's Pattern Primer but with the ability to structure elements, components and patterns into folders and navigate to them easily on one generated style guide. All within a responsive layout, to make testing components at different widths possible.

Pattern Response can be used for more than just a responsive style guide to send to a client. It can be used to document all the components of a site to pass on to a developer. It can also be used to keep a library of your collected and created patterns to reference on new projects. I have even used it to include only the components a client would be able to use in their wysiwyg editor, with an example and explanation of each element and component. What ever html files you throw into the patterns folder it will generate on the page along with it's documentation and a way to navigate to it (through a menu or search).

Now I'm not saying you have to use my Pattern Response project for this (it is pretty hacked together), but for me it is the most flexible system I can use to create style guides quickly. Right, now how use it.

## Using it in a responsive workflow
As a designer, if you have worked out the architecture, flow, layout and feel of the "system" you are designing, you should have an idea of how the "system" is going to function and the elements and components that will help achieve this (I usually document the components I am going to use during/after the wire-framing stage). After this stage you can load up your starter style guide, including the basic html elements used on all sites as well as components you use across all projects. You can then add custom elements for this specific site.

Once the elements are in, they can be styled using the Pattern Response page or Pattern Response can reference the css file of your existing project as you build it. If possible I try to design all the global elements and components I can in the style guide. Designers, if you can't code HTML and CSS this a good document to use to work with the developer as they implement your designs and discuss how each component will work at certain widths.

When documenting each component of in the style guide, I like to think about how each of the elements will work in a responsive environment. Using Luke Wroblewski's notes from Ethan Marcotte's recent An Event Apart talk "Rolling Up Our Responsive Sleeves" I stole his categories of width, hierarchy, density and interaction to explain how a component should react to different sensors (yes there is more than just width to think about, but it is still the major one at the moment).

Using these categories, think about how this component will react at different widths, where this component will be used in the sites heirachy (e.g. which regions will it be included in and which other components should it take precedence over?), with the components density what content can be hidden or shrunk depend on it's sensor (e.g. the images on a list of blog teasers can be hidden on small screens) and finally how the the component can be interacted with (e.g. The main menu may have drop downs that are not available when on small screens or touch devices).

Once the style guide is created and documented it can be used to show the client how each component of the site will function and appear. More importantly it is a great reference point for developers to use to see the structure of the html behind the components and how to implement them. Personally, I have placed the whole Pattern Response project folder in the root folder of the site I have been working on and named it something like "style-guide" so it is easily referenced by anyone at anytime during the project.

As is usually the case, I am not saying this is the method you should use, it's just something I have had success with and has helped in the transition from fixed to responsive sites. I'd love to get feedback if it helps anyone else or if you have other ways of doing this. Also, I'm open to input and changes to the project on github (I'm not really a php programmer). I'm sure it needs some cleaning up.

Also, [here are the slides](http://speakerdeck.com/u/lukebrooker/p/future-friendly-style-guides) from the talk I did on this at [Web Directions, What Do You Know](http://whatdoyouknow.webdirections.org/brisbane).
