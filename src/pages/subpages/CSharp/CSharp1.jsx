import React from "react";
import TitleBanner from "../../../components/TitleBanner";
import CodeSnippet from "../../../components/CodeSnippet";
import Seo from "../../../components/SEO";
const CSharp1 = () => {
  const metaData = [
    {
      name: "keywords",
      content: "C#, code, develop, developer, basics, learn",
    },
  ];

  const codeSimple = `using System;

public class MainClass {
    public static void Main() {
        int firstNumber = 10;
        int secondNumber = 20;
        int sum = firstNumber + secondNumber;
        Console.WriteLine("The sum of the two numbers is " + sum);
    }
}
`;
  const codeBlock1 = `
using System;

namespace Calculator
{
    class Program
    {
        static void Main(string[] args)
        {
            // Declare variables and initialize them
            int a = 10;
            int b = 5;

            // Perform arithmetic operations
            int sum = a + b;
            int difference = a - b;
            int product = a * b;
            int quotient = a / b;
            int remainder = a % b;

            // Display the results
            Console.WriteLine($"a = {a}, b = {b}");
            Console.WriteLine($"a + b = {sum}");
            Console.WriteLine($"a - b = {difference}");
            Console.WriteLine($"a * b = {product}");
            Console.WriteLine($"a / b = {quotient}");
            Console.WriteLine($"a % b = {remainder}");
        }
    }
}`;

  const codeBlock2 = `using System;

namespace Calculator
{
    class Program
    {
        static void Main(string[] args)
        {
            // Prompt for input
            Console.Write("Enter a number: ");

            // Read input and convert it to integer
            string input = Console.ReadLine();
            int a = int.Parse(input);

            // Repeat the same for another number
            Console.Write("Enter another number: ");
            input = Console.ReadLine();
            int b = int.Parse(input);

            // Perform arithmetic operations
            int sum = a + b;
            int difference = a - b;
            int product = a * b;
            int quotient = a / b;
            int remainder = a % b;

            // Display the results
            Console.WriteLine($"a = {a}, b = {b}");
            Console.WriteLine($"a + b = {sum}");
            Console.WriteLine($"a - b = {difference}");
            Console.WriteLine($"a * b = {product}");
            Console.WriteLine($"a / b = {quotient}");
            Console.WriteLine($"a % b = {remainder}");
        }
    }
}`;
  const codeBlock3 = `using System;

namespace Calculator
{
    // Rest of the code
}
`;
  const codeBlock4 = `using System;

namespace Calculator
{
    class Program
    {
        /// <summary>
        /// The entry point of the application.
        /// </summary>
        /// <param name="args">The command-line arguments.</param>
        static void Main(string[] args)
        {
            // Rest of the code
        }
    }
}
`;

  return (
    <div className="row devGuides">
      <Seo
        title="C# Step1"
        description="Training guide on the basics of how to develop C# code."
        meta={metaData}
      />
      <TitleBanner text="C# Step 1" />
      <div className="devContent">
        <p>
          C# is a modern, object-oriented, and type-safe programming language.
          It was developed by Microsoft and is used to create a wide variety of
          applications, including web applications, mobile applications, desktop
          applications, and games.
        </p>
        <p>
          C# is a powerful language that is easy to learn and use. It is based
          on the C++ language, but it has been designed to be more modern and
          easier to use. C# also has a number of features that make it ideal for
          developing web applications, such as support for ASP.NET and AJAX.
        </p>
        <p>
          If you are new to programming, C# is a great language to start with.
          It is easy to learn and there are many resources available to help you
          get started.
        </p>
        <p>
          <ul>
            <li>It is a powerful and versatile language.</li>
            <li>It is easy to learn and use.</li>
            <li>It has a large and active community of developers.</li>
            <li>It is supported by a wide range of tools and technologies.</li>
            <li>
              It is a great choice for developing a variety of applications.
            </li>
          </ul>
        </p>
        <p>
          If you are interested in learning more about C#, there are many
          resources available online and in libraries. You can also find many
          online tutorials and courses that can help you get started.
        </p>
        <CodeSnippet
          language="c#"
          code={codeSimple}
          heading="Example of a simple C# program"
          description="Here is an example of a simple C# program that adds two numbers
        together:"
        />
        <p>
          To compile and run this program, you will need to have a C# compiler
          installed on your computer. You can download a free C# compiler from
          the Microsoft website.
        </p>
        <p>
          Once you have the compiler installed, you can compile the program by
          typing the following command in a command prompt:
        </p>
        <pre>
          <code>csc Calculator.cs</code>
        </pre>
        <p>
          This will create an executable file called Calculator.exe. To run the
          program, type the following command in a command prompt:
        </p>
        <pre>
          <code>Calculator.exe</code>
        </pre>
        <p>This will display the following output in the command prompt:</p>
        <pre>
          <code>The sum of the two numbers is 30</code>
        </pre>
        Introduction to C# C# is a modern, object-oriented, and type-safe
        programming language that enables developers to build many types of
        secure and robust applications that run on the .NET platform. C# has its
        roots in the C family of languages and will be immediately familiar to
        C, C++, Java, and JavaScript programmers[^1^][2]. C# is also an open
        source project managed by the .NET Foundation[^2^][3]. In this article,
        we will cover the following topics: - What is C# and why use it? - How
        to install Visual Studio and create a C# project - How to write,
        compile, and run a simple C# program - How to use the Visual Studio
        debugger and console - How to comment and format your code ## What is C#
        and why use it? C# is a simple, modern, and object-oriented programming
        language that supports multiple paradigms such as imperative,
        declarative, functional, generic, and concurrent programming. C#
        provides language constructs to directly support these concepts, making
        C# a natural language in which to create and use software
        components[^3^][1]. C# also supports advanced features such as generics,
        delegates, events, lambda expressions, exceptions, LINQ, async and
        await, attributes, and reflection. These features enable developers to
        write expressive, concise, and maintainable code that can handle complex
        scenarios[^3^][1]. C# is designed to work with .NET, a virtual execution
        system called the common language runtime (CLR) and a set of class
        libraries. The CLR is the implementation by Microsoft of the common
        language infrastructure (CLI), an international standard. The CLI is the
        basis for creating execution and development environments in which
        languages and libraries work together seamlessly[^1^][2]. .NET provides
        a rich set of frameworks and libraries for developing different kinds of
        applications such as web, desktop, mobile, cloud, gaming, machine
        learning, and more. .NET also supports interoperability with other
        languages and platforms such as Python, Java, Node.js, etc.[^2^][3] Some
        of the benefits of using C# are: - It is a simple and expressive
        language that follows the principle of "write once, run anywhere". - It
        is a type-safe language that prevents common errors such as null pointer
        dereferencing or buffer overflow. - It is an object-oriented language
        that supports encapsulation, inheritance, polymorphism, and abstraction.
        - It is a cross-platform language that can run on Windows, Linux, Mac OS
        X, iOS, Android, etc. - It is a high-performance language that leverages
        the power of .NET's just-in-time (JIT) compilation and garbage
        collection. - It is a versatile language that can be used for various
        domains such as web development, desktop development, mobile
        development, game development, data science, etc. ## How to install
        Visual Studio and create a C# project To start developing C#
        applications, you will need an integrated development environment (IDE)
        that provides tools for writing, debugging, testing, and deploying your
        code. One of the most popular IDEs for C# development is Visual Studio.
        Visual Studio is a powerful and comprehensive IDE that supports multiple
        languages and platforms. Visual Studio provides features such as code
        editor with syntax highlighting and IntelliSense (code completion),
        debugger with breakpoints and watch windows, unit testing framework with
        code coverage analysis, code analysis tools with code metrics and
        refactoring, version control integration with Git or Team Foundation
        Server, deployment tools with publish profiles and Azure DevOps, and
        many more. To install Visual Studio on your computer, - Go to
        https://visualstudio.microsoft.com/downloads/ and choose the edition
        that suits your needs. You can choose between Visual Studio Community
        (free for individual developers or small teams), Visual Studio
        Professional (paid for professional developers or enterprises), or
        Visual Studio Enterprise (paid for large-scale projects or
        organizations). - Download the installer file and run it. Follow the
        instructions on the screen to complete the installation process. You may
        need to restart your computer after the installation. - When you launch
        Visual Studio for the first time, you will be asked to sign in with your
        Microsoft account or create one if you don't have one already. You will
        also be asked to choose your development settings such as theme color or
        keyboard layout. - After you sign in and choose your settings, you will
        see the start window where you can create a new project or open an
        existing one. To create a new C# project, - On the start window, click
        on Create a new project. - On the Create a new project window, type "C#"
        in the searchbox and choose the Console App template. Next, choose C# or
        Visual Basic from the language list, and then choose All platforms from
        the platform list. Choose the Console App template, and then choose
        Next[^1^][2]. - In the Configure your new project window, type or enter
        Calculator in the Project name box, and then select Next. - In the
        Additional information window, .NET 6.0 should already be selected for
        your target framework. Select Create. - Visual Studio opens your new
        project, which includes default "Hello World" code. To view it in the
        editor, select the code file Program.cs in the Solution Explorer window,
        which is typically on the right-hand side of Visual Studio. The single
        code statement calls the WriteLine method to display the literal string
        "Hello, World!" in the console window. ## How to write, compile, and run
        a simple C# program To write a simple C# program that performs some
        basic calculations, - In the code editor, replace the existing code with
        the following code:
        <CodeSnippet language="c#" code={codeBlock1} />
        The code defines a namespace called Calculator that contains a class
        called Program with a single method called Main. The Main method is the
        entry point of the application and takes an array of strings as an
        argument. The code declares and initializes two integer variables named
        a and b, and performs some arithmetic operations on them using operators
        such as +, -, *, /, and %. The results are stored in other variables
        named sum, difference, product, quotient, and remainder. The code then
        uses the Console.WriteLine method to display the values of these
        variables using interpolated strings that insert expressions inside
        curly braces within a string literal. To compile and run your program,
        press Ctrl+F5 to start without debugging. A console window opens with
        the output of your program: a = 10, b = 5 a + b = 15 a - b = 5 a * b =
        50 a / b = 2 a % b = 0 Press any key to close the console window. How to
        use the Visual Studio debugger and console To debug your program and
        interact with it using the console, In the code editor, set a breakpoint
        on line 15 by clicking in the left margin next to that line or by
        pressing F9. A red circle appears indicating that the breakpoint is set.
        Press F5 to start debugging. The program runs until it reaches the
        breakpoint and pauses execution. The current line of code is highlighted
        in yellow. In Visual Studio, you can use various windows and tools to
        inspect and modify the state of your program while debugging. For
        example, you can use the Autos window to view the values of variables
        that are used around the current line of code, the Locals window to view
        all variables that are defined in the current scope, the Watch window to
        add expressions that you want to monitor, the Immediate window to
        execute commands or evaluate expressions at runtime, and many more. To
        open these windows, go to Debug, Windows from the menu bar or press
        Alt+W. To resume execution, press F5 again or click Continue on the
        toolbar. The program runs until it finishes or hits another breakpoint.
        To stop debugging, press Shift+F5 or click Stop Debugging on the
        toolbar. To interact with your program using the console, you can use
        Console.ReadLine or Console.ReadKey methods to read input from the user.
        For example, modify your code as follows:
        <CodeSnippet language="c#" code={codeBlock2} />
        Save your changes by pressing Ctrl+S or by clicking File, Save All.
        Press F5 to start debugging. The console window prompts you to enter two
        numbers. Enter some numbers and press Enter after each one. The program
        displays the results of the calculations and then exits. Press any key
        to close the console window. How to comment and format your code To make
        your code more readable and maintainable, you can use comments and
        formatting techniques. Comments are pieces of text that are ignored by
        the compiler but can help you or other developers understand the purpose
        or logic of your code. C# supports two different forms of comments.
        Single line comments start with // and end at the end of that line of
        code. Multiline comments start with /* and end with */1. You can use
        comments to explain your code, provide additional information, or
        temporarily disable some code for testing purposes. For example, you can
        add a comment at the beginning of your program to describe what it does:
        // This program is a simple calculator that performs basic arithmetic
        operations on two numbers
        <CodeSnippet language="c#" code={codeBlock3} />
        You can also use comments to document your code using a special syntax
        that contains XML text. These comments are called documentation comments
        and they can be used by tools to generate documentation files or display
        information about your types and members. For example, you can add a
        documentation comment before your Main method to describe its parameters
        and return value:
        <CodeSnippet language="c#" code={codeBlock4} />
        Formatting is the way you arrange your code in terms of indentation,
        spacing, line breaks, etc. Formatting can affect the readability and
        consistency of your code. Visual Studio provides several features to
        help you format your code automatically or manually. You can use
        indentation to align your code blocks according to their nesting level.
        Visual Studio indents your code automatically when you type it or paste
        it. You can also indent or unindent selected lines of code by pressing
        Tab or Shift+Tab respectively. You can use spacing to separate symbols,
        keywords, operators, etc. Visual Studio inserts spaces automatically
        according to your preferences. You can also insert or remove spaces
        manually by pressing Space or Backspace respectively. You can use line
        breaks to separate statements, declarations, blocks, etc. Visual Studio
        breaks lines automatically when they exceed a certain length or when you
        press Enter. You can also break or join lines manually by pressing Enter
        or Delete respectively. You can use Visual Studio’s formatting commands
        to format your entire document or a selected portion of it according to
        predefined rules. You can access these commands by clicking Edit,
        Advanced from the menu bar or by using keyboard shortcuts. For example,
        you can press Ctrl+K, Ctrl+D to format the document, or Ctrl+K, Ctrl+F
        to format the selection. You can also customize the formatting rules and
        preferences for C# code by clicking Tools, Options from the menu bar and
        then selecting Text Editor, C#, Code Style from the left pane.
      </div>
    </div>
  );
};

export default CSharp1;
