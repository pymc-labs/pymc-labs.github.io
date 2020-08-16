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

### Other stuff to edit?

Consult:

- [Lektor docs][lektor]
- [Eric Ma][ericmjl] for a one-on-one coaching session on how to make the website.

[lektor]: https://getlektor.com
[ericmjl]: http://shortwhale.com/ericmjl
[thomas]: https://twiecki.io
