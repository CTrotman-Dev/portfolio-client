import React from "react";
import CodeSnippet from "../../components/CodeSnippet";
import TitleBanner from "../../components/TitleBanner";
import Seo from "../../components/SEO";
const CSharpBasics = () => {
  const metaData = [
    {
      name: "keywords",
      content: "C#, code, develop, developer, basics, learn",
    },
  ];

  const helloWorldCode = [
    `
using System;
                public class HelloWorld{
                    void Main(){
                    Console.WriteLine("Hello, World!");
                    }
                }
  `,
    `Let's look at an example of a simple C# program that prints "Hello,
        World!" to the console. Create a new file called HelloWorld.cs and type
        the following code:`,
  ];

  const javascriptCode = `
function helloWorld() {
  console.log("Hello, World!");
}

helloWorld();
  `;

  return (
    <div className="row devGuides">
      <Seo
        title="C# Basics"
        description="Training guide on the basics of how to develop C# code."
        meta={metaData}
      />
      <TitleBanner text="C# Basics" />
      <div className="devContent">
        <p>
          In this section, you will learn the basics of C#, a general-purpose
          programming language that can be used to write server-side logic and
          functionality for web applications. You will learn how to write and
          run C# programs, how to use variables, data types, operators,
          expressions, statements, control structures, methods, classes,
          objects, and more.
        </p>
        <p>
          C# is a compiled language, which means that you need to use a compiler
          to convert your source code into executable code that can run on a
          specific platform. The .NET SDK provides a C# compiler called csc.exe
          that you can use to compile your C# programs. You can also use Visual
          Studio Code, which has built-in support for C# and .NET development.
        </p>
        <p>
          To write a C# program, you need to use a text editor or an IDE to
          create a file with the .cs extension. A C# file can contain one or
          more classes, which are the basic units of code organization in C#. A
          class can contain one or more methods, which are the basic units of
          code execution in C#. A method can contain one or more statements,
          which are the basic units of code action in C#. A statement can
          contain one or more expressions, which are the basic units of code
          evaluation in C#. An expression can contain one or more operands and
          operators, which are the basic units of code manipulation in C#.
        </p>
        <p>
          To run a C# program, you need to compile it and execute it. You can
          use the csc.exe compiler to compile your C# file into an executable
          file with the .exe extension. You can then use the dotnet.exe command
          to run your executable file. You can also use Visual Studio Code,
          which has built-in tools for compiling and running your C# programs.
        </p>
        <CodeSnippet
          language="c#"
          code={helloWorldCode[0]}
          description={helloWorldCode[1]}
        />

        <p>
          The first line of the code is a using directive that tells the
          compiler to use the System namespace, which contains many useful
          classes and methods for common tasks. The second line of the code is a
          class declaration that defines a class named HelloWorld. The third
          line of the code is a method declaration that defines a method named
          Main. The Main method is a special method that is the entry point of
          every C# program. The fourth line of the code is an opening curly
          brace that marks the beginning of the method body. The fifth line of
          the code is a statement that calls the WriteLine method of the Console
          class and passes it a string literal as an argument. The WriteLine
          method prints the string to the standard output stream, which is
          usually the console. The sixth line of the code is a closing curly
          brace that marks the end of the method body.
        </p>
        <CodeSnippet
          language="bash"
          code="csc HelloWorld.cs"
          description="To compile and run this program, open a terminal in Visual Studio Code
        and navigate to your project folder. Type the following command to
        compile your C# file into an executable file:"
        />

        <CodeSnippet
          language="bash"
          code="dotnet HelloWorld.exe"
          description="Type the following command to run your executable file:"
        />

        <CodeSnippet
          language="bash"
          code="Hello, World!"
          description="You should see the following output:"
        />
        <p>
          Congratulations! You have just written and run your first C# program.
        </p>
        <p>
          In the next sections, you will learn more about the various features
          and concepts of C# programming.
        </p>
      </div>
    </div>
  );
};

export default CSharpBasics;
