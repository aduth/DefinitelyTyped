import { generatePdf, generatePdfs } from "html-pdf-node/index";

// $ExpectType void
generatePdf(
    {
        content: "<h1>Hello World!</h1>",
    },
    {
        format: "A4",
        printBackground: true,
    },
    (err, buffer) => {
        // $ExpectType Buffer || Buffer<ArrayBufferLike>
        buffer;
    },
);

// $ExpectType void
generatePdfs(
    [
        {
            content: "<h1>Hello World!</h1>",
        },
        {
            content: "<h1>Hello World!</h1>",
        },
    ],
    {
        format: "A4",
        printBackground: true,
    },
    (err, buffer) => {
        // $ExpectType Buffer || Buffer<ArrayBufferLike>
        buffer;
    },
);
