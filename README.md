# A Satellite Story

## The idea

Let’s create a website to share the story of satellites. I’ll talk about the satellite that changed everything, Sputnik 1.

I wanna make a 3d website with scroll animations. I’m currently exploring React so let’s use React-Three-Fiber.

Now that I’ve set the base of the project, I need some ideas. Let’s try to center the satellite on the screen because that’s the main subject. I’ll make the Earth rotate on scroll. The story will appear on the top of the screen and will change on scroll too.

[Live](https://satellite-story.netlify.app/)

## Features

### Scroll animation

The scroll animation is the main feature of the website. It needs to work on all devices. Fortunately, React-three/drei has a built in function to do that. Set up all the scroll animated components inside a ScrollControls component form drei. All the children can access the useScroll hook. There is a lot of data inside but I just need to use the offset to get the scroll progress from 0 to 1. With that, I set the planet rotation and update my messageId state. This state will help me display the right content.

### Mount & Unmount animations

The rendering works fine and I can see the message that I want when I want (cf the scroll animation feature). The thing is, I’d like to add a fade animation when a message appears. It’s really easy to do in native Javascript but with React, I can’t add an animation or transition when the component unmount. After looking for some libraries, I picked react-spring. It’s the smallest one I could find, and I don’t want to add a big lib for such a simple thing. It’s a bit hard to setup because the documentation and the examples show different implementations. I’ve wasted more time that I wanted, but hey, it works.

### Custom loader

I’ve done custom loaders in other projects, but this time I wanted to make one with a call to action and a progress bar. This wasn’t necessary, but I’ve no idea how to do that so I’ll try. As usual, I’ll use the Suspense component from react, however I’ll set the fallback to null.

I’ve created a custom loader with a simple animation. It’s time to add the logical part with the progress bar. Thanks to drei (again), I’ve access to a useProgress hook. Unfortunately, I had issues while implementing it. In some case it was stuck at 0 so the call to action won’t update and the user couldn’t enter the experience. I don’t have any explanation for this. To patch the bug, I removed the conditional rendering on the Experience component. It works fine, but I ain’t sure it’s a good thing for performances.

## Licences

[Satellite Model](https://github.com/rqphy/SatelliteStory/blob/main/public/sputnik/license.txt)

[Earth Model](https://github.com/rqphy/SatelliteStory/blob/main/public/earth/license.txt)
