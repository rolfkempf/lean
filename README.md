#Lean

Lean is a simple and small WordPress starter theme.

What it does:

**WordPress**

- simple WordPress setup (only basic template files)
- minimal markup for a lean start
- markup is build with **bootstrap** in mind, menus are built using  [https://github.com/twittem/wp-bootstrap-navwalker]().
- **favicon** included yay
- take all theme-related features from "functionality plugin" and put it into the according include-files loaded by functions.php. This might be considered a bad practice but it does a good job for me.
- load **minified assets** (both js and css)

**Frontend**

- use best practices from **h5bp**, **bootstrap** and friends
- It´s mobile first, yay. All screen-sizes are in seperate files.
- **Bootstrap 3** shims for IE8 already included
- Grunt-workflow for image-optimization (imagemin), javascript (uglify) and less (less, autoprefixer, cssmin)
- which **Javascript-libraries** are included?
    - **jQuery 1.11** (still supporting oldies)
    - **Modernizr**
    - **underscore**
- simplified **BEM/OOCSS** for css (see header info in [screen.less](https://github.com/doingwebthings/lean/blob/master/assets/less/screen.less) for example)



##Defaults

### Files in /includes/

All these files are loaded by functions.php.

####admin-setup.php

- show template in admin-bar
- beef up admin (dividers, smaller text)
- add Role Editor-in-Chief (author + permissions for Appearance)

####cpt-loader.php

- simply includes files from includes/custom-post-types/
- all definition for CPTs goes into separate files (products.php, jobs.php)

####mail-setup.php

Customize emails here.

- removes 'WordPress' from default-emails, set **from** and **from-name**
- caution: since this is in the theme you can´t override "pluggable" mail functions here

####shortcodes.php

A file to add shortcodes.

####template-tags.php

A file for helper functions used in template files. base_url(), asset_url(), trunc(), is_child(), is_ancestor(), ... mostly functions already provided by wp but not to my liking.

####theme-setup.php

- registers **menus** (primary and secondary) and **widgets**
- load **asset files**: js/scripts.min.js (all js) at the bottom, js/modernizr.min.js in head and css/styles.css in head
- **remove comments** from wp_header() and wp_footer()
- **various filters** (title, excerpt, attachement-links, ...)
- **remove some WordPress stuff** (feed-links, wp-generator, ...) not activated by default
- **bootstrap navbar** with [https://github.com/twittem/wp-bootstrap-navwalker]()
- **image resizing**: BFI_Thumbs available for usage in template files

##To-Do

- use more semantic markup (and CSS-classes) suitable for blogs AND portfolio-sites
- Grunt: create image-sprites (and svg-sprites)
- move to jQuery 2 sometime?