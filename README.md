## logseq-simple-plugin-starter

A well setup vanilla-typescript logseq plugin development starter.

You can add other things on top of this if you know what you are doing but I would recommend using a specialized starter if your requirements are not:

- Very simple and light
- Quick setup and no-extras
- Using typescript

WHEN NOT TO USE THIS:
- You NEED entry point as a `index.html` (such as if it's a react app or something)

## USAGE

The project is pretty simple,

1. `index.ts` has the entry point and `helloworld.ts` shows how to modularize the code.

2. To run the code when developing, just do
    ```sh
        npm run dev # or, pnpm dev
    ```

3. Above will watch your code for changes and you can reload the plugin in logseq to test it.

4. To get a production build, use 
    ```sh
        npm run build # or, pnpm build
        # this will get you an optimized build
    ```

## FAQ

Feel free to let me know if I missed something, this was written purely because entire logseq ecosystem had a lack of proper starter templates for plugins and I needed one to write a quick plugin that I had in mind.

This is meant as a starter for things that are generally script only or don't require entire bloated frameworks, please don't ask me how to use it with anything like that.