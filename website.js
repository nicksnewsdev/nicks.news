const WEBSITE_CONTAINER = document.getElementById('website');

const WEBSITE = () => {
    WEBSITE_CONTAINER.innerHTML = `
        <div class="terminal">
            <p class="terminal_user">
                <span class="terminal_color">guest</span>@<span class="terminal_color">nicks.news</span>:$ ~
            </p>
            
            <pre class="terminal_website">
███╗  ██╗██╗ █████╗ ██╗  ██╗ ██████╗███╗  ██╗███████╗ ██╗       ██╗ ██████╗
████╗ ██║██║██╔══██╗██║ ██╔╝██╔════╝████╗ ██║██╔════╝ ██║  ██╗  ██║██╔════╝
██╔██╗██║██║██║  ╚═╝█████═╝ ╚█████╗ ██╔██╗██║█████╗   ╚██╗████╗██╔╝╚█████╗ 
██║╚████║██║██║  ██╗██╔═██╗  ╚═══██╗██║╚████║██╔══╝    ████╔═████║  ╚═══██╗
██║ ╚███║██║╚█████╔╝██║ ╚██╗██████╔╝██║ ╚███║███████╗  ╚██╔╝ ╚██╔╝ ██████╔╝
╚═╝  ╚══╝╚═╝ ╚════╝ ╚═╝  ╚═╝╚═════╝ ╚═╝  ╚══╝╚══════╝   ╚═╝   ╚═╝  ╚═════╝
            </pre>

            <p class="terminal_header"><span class="terminal_prompt">$ ~</span> About Me</p>
            <pre class="terminal_content">
I'm an 18-year-old programmer based in Brandenburg, Germany with an interest in computer science and low-level game design. Looking ahead, I aim to transition into quantitative trading environments for software development.
            </pre>

            <p class="terminal_header"><span class="terminal_prompt">$ ~</span> My Technologies</p>
            <pre class="terminal_content">
I have experience with a variety of programming languages such as JavaScript, Lua, Python, and more. However, I'm currently aiming to improve my programming expertise by learning C++ and Rust. I do not support excessive use of artificial intelligence for programming.
            </pre>

            <p class="terminal_header"><span class="terminal_prompt">$ ~</span> Contact Me</p>
            <pre class="terminal_content">
For professional requests, you can reach me at <span class="terminal_color">contact@nicks.news</span>
            </pre>
        </div>
    `;
};

WEBSITE();
