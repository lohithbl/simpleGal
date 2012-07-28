simpleGal
=========

A simple image gallery plug-in

Place your thubmnails within either a <code>div</code>, <code>ol</code> or <code>ul</code> like so:

<pre><code>&lt;div class="thumbnails"&gt;
  &lt;a href="path/to/larger-image.jpg"&gt;
    &lt;img src="path/to/thumbnail.jpg" alt="Thumbnail"&gt;
  &lt;/a&gt;
  &lt;a href="path/to/larger-image.jpg"&gt;
    &lt;img src="path/to/thumbnail.jpg" alt="Thumbnail"&gt;
  &lt;/a&gt;
  &lt;a href="path/to/larger-image.jpg"&gt;
    &lt;img src="path/to/thumbnail.jpg" alt="Thumbnail"&gt;
  &lt;/a&gt;
&lt;/div&gt;</code></pre>

or

<pre><code>&lt;ul class="thumbnails"&gt;
  &lt;li&gt;
    &lt;a href="path/to/larger-image.jpg"&gt;
      &lt;img src="path/to/thumbnail.jpg" alt="Thumbnail"&gt;
    &lt;/a&gt;
  &lt;/li&gt;
  &lt;li&gt;
    &lt;a href="path/to/larger-image.jpg"&gt;
      &lt;img src="path/to/thumbnail.jpg" alt="Thumbnail"&gt;
    &lt;/a&gt;
  &lt;/li&gt;
  &lt;li&gt;
    &lt;a href="path/to/larger-image.jpg"&gt;
      &lt;img src="path/to/thumbnail.jpg" alt="Thumbnail"&gt;
    &lt;/a&gt;
  &lt;/li&gt;
&lt;/ul&gt;</code></pre>

or

<pre><code>&lt;ol class="thumbnails"&gt;
  &lt;li&gt;
    &lt;a href="path/to/larger-image.jpg"&gt;
      &lt;img src="path/to/thumbnail.jpg" alt="Thumbnail"&gt;
    &lt;/a&gt;
  &lt;/li&gt;
  &lt;li&gt;
    &lt;a href="path/to/larger-image.jpg"&gt;
      &lt;img src="path/to/thumbnail.jpg" alt="Thumbnail"&gt;
    &lt;/a&gt;
  &lt;/li&gt;
  &lt;li&gt;
    &lt;a href="path/to/larger-image.jpg"&gt;
      &lt;img src="path/to/thumbnail.jpg" alt="Thumbnail"&gt;
    &lt;/a&gt;
  &lt;/li&gt;
&lt;/ol&gt;</code></pre>

You can give the list a class or ID of anything you like.

Then create a placeholder for your main image like so:

<pre><code>&lt;img src="path/to/placeholder-image.jpg" alt="Placeholder" class="placeholder"&gt;</code></pre>

Again, you can give this image a class or ID of anything you like.

In your JS file, call the function using your class or ID:

<pre><code>$('.thumbnails').simpleGal();</code></pre>

If you have given the main image a class of anything other than <code>placeholder</code> or used an ID then you must declare that in the options:

<pre><code>$('.thumbnails').simpleGal({
  mainImage: '.your-main-image-class-or-ID'
});</code></pre>

That&rsquo;s it. You should be ready to roll.