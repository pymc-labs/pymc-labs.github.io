# PyMC Labs Official Website

## Business contact

- [Thomas Wiecki][thomas]

## Maintenance

### Environment

```bash
git clone git@github.com:pymc-labs/pymc-labs.github.io.git
cd pymc-labs.github.io
conda env create -f environment.yml  # can use mamba too!
```

### Start Lektor Server

```bash
lektor server -p 5959  # you can change it to any port you want
```

Go to your browser, and load `http://localhost:5959`
to access the website UI content editor UI.

## Editing

### "Static" data

For navigation: `databags/nav.json`.

For contact information: `databags/contact.json`.

### Main page content

Use the Lektor editor

### Templates

Uses Jinja2 templating.

### Headshots

They are pulled from GitHub by just loading
whatever URL to our main profile page is.

### Metadata
Most forums and social networks nowadays can use fancy card views with a
title, a description and an image, which serves as a link preview. For the
card preview to work, the `<head>` section must include some metadata fields.

The most important fields have been configured for all pages with some
defaults and they can be overwritten from more specific templates. See
`templates/layout.html` for info on how to set the metadata and the defaults
used.

`title`, `og_description` and `og_image` block can be used to modify the default title
description and image in the card respectively. Here is one example from the
teammates template:

```html
<!-- layout sets the metadata defaults and blocks to modify it -->
{% extends "layout.html" %}
<!-- Use title to modify the default "PyMC Labs" as title -->
<!-- Note that this affects both the card title and the title shown by the browser -->
{% block title %}{{ this.name }} - PyMC Labs{% endblock %}
<!-- Use og_description to modify the default "Bespoke Bayesian Modeling" as description -->
{% block og_description %}{{ this.blurb|string }}{% endblock %}
```

See more on possible metadata fields [here](https://ogp.me/). Moreover,
Twitter is extremely picky and in addition to being the most restrictive in
general, also requires an extra line to choose between the `summary` or
`summary_large_image` card types. For now all pages use `summary` format, but
this could be modified or left to configure for each page if desired.

### Other stuff to edit?

Consult:

- [Lektor docs][lektor]
- [Eric Ma][ericmjl] for a one-on-one coaching session on how to make the website.

[lektor]: https://getlektor.com
[ericmjl]: http://shortwhale.com/ericmjl
[thomas]: https://twiecki.io
