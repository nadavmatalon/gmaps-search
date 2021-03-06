#Gmaps Search

##Table of Contents

* [Screenshot](#screenshot)
* [General Description](#general-description)
* [See it Live on Github](#see-it-live-on-github)
* [How to Run the App Locally](#how-to-run-the-app-locally)
* [Browsers](#browsers)
* [Credit](#credit)
* [License](#license)


##Screenshot

<table>
	<tr>
		<td align="center" width="450px" height="450px">
			<a href="https://raw.githubusercontent.com/nadavmatalon/gmaps-search/master/images/gmaps-search.png">
				<img src="/images/gmaps-search.png" />
			</a>
		</td>
	</tr>
</table>


##General Description

This repo contains a simple web app for address searching using Google's 
[Gmaps API](https://developers.google.com/maps/), written with 
[JavaScript](http://en.wikipedia.org/wiki/JavaScript) 
&amp; [jQuery](http://jquery.com).

The user can enter an address anywhere in the world and the app 
generates a map of that area with a marker designating the location of 
the specified address.

If the address can't be found, the app gives the relevant notice.

The app also includes an autocomplete function which dynamically gives 
optional matches for the entered address.


##See it Live on Github
			
A live version of the app can be found at:

[Gmaps Search on Github.io](http://nadavmatalon.github.io/gmaps-search/)


##How to Run the App Locally

To run the app locally, clone the repo locally and in the terminal run:

```bash
$> cd gmaps-search
$> open index.html
```

##Browsers

This app supports the following browsers (though it should hopefully 
look decent in other browsers as well):

* __Google Chrome__ (36.0)
* __Apple Safari__ (7.0.5)
* __Mozilla Firefox__ (31.0)


##Credits

The app makes use of the following resouces:
* [Gmaps API](https://developers.google.com/maps/)
* [gmaps.js](http://hpneo.github.io/gmaps/)
* [Bootstrap](http://getbootstrap.com)
* [Google Fonts](http://www.google.com/fonts)

The code in this repo was very helpful in understaing the autocomplete function:
* [rjshade: gmaps-autocomplete](https://github.com/rjshade/gmaps-autocomplete)


##License

<p>Released under the <a href="http://www.opensource.org/licenses/MIT">MIT license</a>.</p>

