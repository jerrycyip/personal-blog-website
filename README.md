# Personal Blog Website with Dynamic Landing Page
## Description
This project is part of Udacity's Front End Web Developer Nanodegree program.  The original project ('personal blog website') was to create a personal blog website using only HTML and CSS, with emphasis on employing the latest CSS Grid and Flexbox features.  As part of the latest updates (9/1/2020), dynamic javascript functionality has been added to the main landing page to satisfy requirements for a dynamic 'landing page' project.  

## Tools Required
Minimal tools are required to develop and run this project, as follows: 
- text editor (e.g. [Atom](https://atom.io/)) or Integrated Development Environment - IDE (e.g. MS Visual Studio)
- web browser (e.g. Chrome/Safari/Firefox)

## Development
### HTML (original scope: personal blog website project)
The main homepage is accessed via the index.html file with the other html "blog post" files being linked to from the main homepage.

### CSS (original scope: personal blog website project)
The supporting css files are separated based on functionality (e.g. mobile responsive, navigation bar, overall layout etc).  

### JavaScript (updated scope: dynamic landing page project)
The supporting javascript file, "app.js", controls dynamic functionality on the landing page including: 
- creation of both the top navigation menu and the side toggle 'dashboard' menu
- active state to indicate the main viewable 'section' that is currently being viewed.

The navigation menus are created based on the different 'sections' of the blog landing page (i.e. blog topics such as 'latest'/'travel'/'eats'/'thoughts') such that as new sections are added or removed the top and side navigation menus would be updated accordingly.  Note, the menus' 'about' link (and 'home' link for the side menu) is static as it is a permanent feature of the blog website.  When clicking these menu links, the page automatically scrolls to that section.  When sections are near the top/center of the screen their styling becomes 'active' with subtle design changes including the title bar being illuminated with a grey background color along with shadow-boxing for that section's row of blog cards.

To achieve said functionality, JavaScript functions and event listeners are employed to allow for DOM manipulation as well as toggling of CSS classes on the different 'active/inactive' sections' HTML elements.  Possible future enhancements (not part of current project requirements) may include expandable/collapsible side menu options for each section that link to individual blog posts by date.

## Design Considerations
Note, this project intentionally explores and employs horizontal scroll (in addition to traditional vertical scroll) as a way to optimize content display for the user while minimizing necessary up and down scroll -- a common feature of today's websites/apps which can often be a disorienting user experience and inefficient use of viewable screen real estate.  Although not necessarily common to news and blog sites, this design approach is employed by other media websites such as Netflix, Disney Plus, and Amazon as well as traditional print media (newspapers, magazines) -- for more background see ['skeuomorphic' design](https://en.wikipedia.org/wiki/Skeuomorph)

## Project Management
The projects' different feature enhancements and bug fixes are tracked and recorded in the following project management ["kanban board"](https://trello.com/b/xpAXZ4Cj/language-blog-website-project)

## Author(s)
Jerry Yip
- [GitHub](https://github.com/jerrycyip)
- [LinkedIn](https://www.linkedin.com/in/jerrycyip/)


