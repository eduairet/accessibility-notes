# Web Accessibility Overview

## Semantic HTML

- Semantic HTML is the use of HTML markup that conveys meaning about the content contained within the elements. This helps assistive technologies, like screen readers, to better understand and interpret the content of a web page.
- Some bad uses of HTML are:

  ```HTML
  <!-- Wrong heading levels -->
  <h3>This should be an h2 and it should be below h1</h3>
  <h1>This should be above h3</h1>

  <!-- Using an anchor without href and where a button should be used-->
  <a>Menu</a>
  <!-- Wrapping buttons in anchors or vice versa -->
  <a href="#"><button>Submit</button></a>

  <p>Some text using <h4>headings</h4> inside paragraphs</p>

  <!-- Using custom form elements when we have existing HTML elements that do the job -->
  <form action="">
    <div class="dropdown">
        <div>Option 1</div>
        <div>Option 2</div>
        <div>Option 3</div>
    </div>
  </form>
  ```

- Using the right HTML elements will not only improve the accessibility of your web pages, but it can also enhance the overall user experience since each element thrives in its intended purpose, like when you use a button, it behaves like a button should and provides the expected functionality, it's keyboard accessible by default, and it can be easily styled and manipulated with CSS and JavaScript.
- Sometimes when we need to use an element that's not natively interactive, we can enhance its accessibility by adding appropriate roles and attributes, such as `role="button"` or `tabindex="0"`, to make it behave more like a button.

  ```HTML
  <div role="button" tabindex="0">Click me</div>
  ```

## Accessible Colors

- Accessible colors are colors that provide sufficient contrast between text and its background to ensure readability for all users, including those with visual impairments. The Web Content Accessibility Guidelines (WCAG) recommend a minimum contrast ratio of 4.5:1 for normal text and 3:1 for large text.
- One of the most important aspects of accessible colors is not relying solely on color to convey information. For example, using red text to indicate an error message may not be effective for users with color blindness. Instead, consider using additional visual cues, such as icons or text labels, to ensure that the information is conveyed effectively.
  - Apply this principle also for element states, such as hover and focus, to ensure that all users can perceive changes in the interface, like adding an underline to a link on hover.
- Use contrast-checking tools to evaluate the color combinations used in your designs and ensure they meet accessibility standards.
  - Some popular contrast-checking tools include the [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/).

## ARIA

- ARIA (Accessible Rich Internet Applications) is a set of attributes that can be added to HTML elements to improve accessibility, especially for dynamic content and advanced user interface controls.
- Some common ARIA roles include:
  - `role="button"`: Indicates that an element is a button.
  - `role="dialog"`: Indicates that an element is a dialog box.
  - `role="alert"`: Indicates that an element is an alert message.
- ARIA attributes can also be used to provide additional information about an element's state or properties, such as:
  - `aria-label`: Provides a text label for an element.
  - `aria-labelledby`: Identifies the element that labels another element.
  - `aria-hidden`: Indicates whether an element is visible or hidden.
- A practical example could be a tabbed interface where each tab is a button, and the content panels are associated with their respective tabs using `aria-controls` and `aria-labelledby` attributes.

  ```HTML
  <div role="tablist">
    <button id="tab1" role="tab" aria-controls="panel1" aria-selected="true">Tab 1</button>
    <button id="tab2" role="tab" aria-controls="panel2" aria-selected="false">Tab 2</button>
  </div>
  <div id="panel1" role="tabpanel" aria-labelledby="tab1" hidden="">Content for Tab 1</div>
  <div id="panel2" role="tabpanel" aria-labelledby="tab2" hidden="hidden">Content for Tab 2</div>
  ```

## Accessible Images

- Images should have descriptive alt text that conveys the content and function of the image. This is especially important for users who rely on screen readers.
  - Use the `alt` attribute to provide a text alternative for images. If the image is purely decorative, use an empty `alt` attribute (e.g., `alt=""`) to indicate that it can be ignored by assistive technologies.
  - Never use `alt="Image ..."` since the screen reader will already announce it as an image.
  - Consider the context in which the image is used. The alt text should reflect the purpose of the image within that context.
- When the image is inside a link and there's no text content, the alt text should describe the link's purpose (e.g., `alt="View larger image"`).
- You can use `aria-labelledby` to associate the image with a text label. This is particularly useful for complex images or when the alt text alone is not sufficient.

  ```HTML
  <img src="complex-image.jpg" alt="" aria-labelledby="image-label">
  <span id="image-label">A detailed description of the complex image.</span>
  ```

- When the image has text inside it, you'll need to describe the text content in the alt attribute (e.g., `alt="Woman saying 'Hello'"`).

## Outline Property

- The outline is a property that each HTML element has, which is used to create a visual indication of focus or selection.
- Outlines are typically rendered as a line around the element, and they can be customized using CSS.
- The outline property is particularly important for accessibility, as it helps users navigate and interact with the interface using a keyboard.
- By default, most browsers apply a focus outline to elements like links and form controls. However, this outline can be removed or modified using CSS.
- When designing for accessibility, it's crucial to ensure that focus styles are visible and provide sufficient contrast with the background.

  ```CSS
  :focus {
    outline: 2px solid blue;
  }
  ```

## Keyboard Navigation

- Keyboard navigation is essential for users who rely on keyboards instead of mice to interact with web content.
- Ensure that all interactive elements are focusable and can be accessed using the keyboard (e.g., links, buttons, form fields).
- Use the `tabindex` attribute to manage the tab order of elements when necessary.
- Provide visible focus styles for keyboard users to help them identify which element is currently focused.
- Test your designs using only the keyboard to ensure a smooth and intuitive navigation experience.
  ```HTML
  <img src="image.jpg" alt="Zoom view" tabindex="0" style="outline: 2px solid blue;" />
  ```
- If you need to make an element not focusable even when the `tabindex` is set, you can use the `hidden` attribute to make it not focusable:
  ```HTML
  <div tabindex="0" hidden>This is a hidden but focusable element.</div>
  ```
- Another way that involves JavaScript is to add `tabindex="-1"` to an element to make it programmatically focusable, this is pretty useful for modals:
  ```JavaScript
  const modal = document.getElementById("myModal");
  modal.setAttribute("tabindex", "-1");
  modal.focus();
  ```
- If you use `display:none` in an element, it will not be focusable or visible to keyboard users. Instead, consider using `visibility:hidden` or `opacity:0` to hide the element while keeping it focusable.

  ```HTML
  <div tabindex="0" style="visibility:hidden">This is a hidden but focusable element.</div>
  ```

  ```CSS
  .hidden {
    visibility: hidden;
  }
  ```

## Bypass Blocks

- Bypass blocks are areas of content that can be skipped by keyboard users, allowing them to navigate more efficiently.
- Common examples include:
  - Repetitive navigation links (e.g., "Skip to main content" links)
  - Sections of content that are not relevant to all users (e.g., ads, promotional banners)
- To create a bypass block, you can use the `tabindex` attribute to make the element focusable and then use JavaScript to manage focus.
  ```HTML
  <a href="#main-content" class="skip-link">Skip to main content</a>
  ...
  <main id="main-content">
      <!-- Main content goes here -->
  </main>
  ```

## Accessible Video and Audio

- Providing captions and transcripts for all video and audio content will help users who are deaf or hard of hearing, as well as those who prefer to consume content in a text format.
  - It will also help screen readers convey the content more effectively.
- There are two types of captions:
  - Closed captions (CC) can be turned on or off by the user and are typically used for videos.
  - Open captions are always visible and cannot be turned off, making them a good option for live events.
- Another accessibility consideration is providing audio/visual descriptions for users who are blind or have low vision.
  - Audio descriptions provide a spoken narration of important visual elements in the content, helping users understand what is happening on screen.
- Consider providing sign language interpretation for video content to support users who are deaf or hard of hearing.
  - This can be done by including a sign language interpreter in the video or providing a separate video with sign language interpretation.
  - Confirm the regional sign language used by your audience to ensure effective communication.
  - Make sure the video is viewable in a way that accommodates sign language interpretation (e.g., by allowing enough space for the interpreter).
- In general, it's important to never autoplay video or audio content, as this can be disruptive for users who rely on assistive technologies, for example, if a user has epilepsy and is sensitive to flashing lights or sudden sounds.
  - It's also important to provide controls for users to play, pause, and adjust the volume of the content.
  - Add a warning for users about any potentially triggering content (e.g., flashing lights, loud sounds) before they engage with the media.

## Forms

- Use `<label>` elements to associate text labels with form controls. This helps screen readers identify the purpose of each form field.
  - It's common to use the placeholder instead of the label but this is in general a bad practice.
- Placeholder needs to have a good amount of contrast to be readable, very light text on a white background is not readable.
- Don't use asterixes (\*) to indicate required fields, instead use the `required` attribute, and if you want to indicate it visually, use text like "(required)", or in the other hand, "(optional)" for optional fields.
  - If you really want to use an asterisk, use `aria-hidden="true"` to hide it from screen readers and provide a text alternative indicating the field is required., and always write instructions that indicates what's the asterisk means.
- You can use `aria-required="true"` to indicate that a field is required, but it's better to use the native `required` attribute since it's more widely supported.
- When using error messages, make sure they are clear and specific, and provide guidance on how to correct the error.
  - Use `aria-live="assertive"` to announce error messages to screen readers.
  - Don't use color alone to indicate errors, as this may not be perceivable by all users.
  - Consider using icons or text labels to indicate errors.
- Don't use submit buttons with text like "Submit" or "Send", instead use text that indicates the action being performed, like "Send Message", "Subscribe to Newsletter", etc.

## Links

- When using links, it's preferable not to use `target="_blank"` to open links in a new tab or window, as this can be disorienting for users, especially those using screen readers.
  - If you must use it, make sure to inform users that the link will open in a new tab or window, for example, by adding an icon (preferred) or text like "(opens in a new tab)".
    - When using an icon, make sure to provide a text alternative using `aria-label` or a visually hidden text bound to the icon anchor using `aria-labelledby`.
  - Also, consider using `rel="noopener noreferrer"` to improve security and performance when using `target="_blank"`.
- Even though it might interfere with styling, the underline is a widely recognized visual cue for links, so it's generally a good idea to keep it.
  - If you decide to remove the underline, make sure to provide another visual cue, such as a different color or font style, to indicate that the text is a link.
  - If it has a different color, make sure it has enough contrast with the surrounding text.
- Another bad practice with links is using "click here", "read more", or similar phrases as link text. Instead, use descriptive text that indicates the purpose of the link, such as "Learn more about our services" or "Read our latest blog post".
  - This helps users understand the context of the link and improves accessibility for screen reader users.
- When using images or icons as links, make sure to provide a descriptive `alt` attribute or use `aria-label` to indicate the purpose of the link instead of the description of the image.

## Auditing

- Use automated tools to identify potential accessibility issues on your website. Some popular tools include:
  - [WAVE](https://wave.webaim.org/)
  - [axe](https://www.deque.com/axe/)
  - [Lighthouse](https://developers.google.com/web/tools/lighthouse)
  - [NVDA](https://www.nvaccess.org/download/)
    - Free screen reader for Windows
    - Use Tab to navigate and Enter to activate links and buttons
    - Use the arrow keys to read content

## Resources

### [Multimedia Accessibility FAQ (W3C video-notes)](https://www.google.com/url?q=https://www.w3.org/2008/06/video-notes&sa=D&ust=1568581545875000)

- W3C internal multimedia accessibility policy
  - All multimedia (audio/video) published by W3C must be accessible at time of posting

### [W3C Web Accessibility Initiative (WAI)](https://www.google.com/url?q=https://www.w3.org/WAI/&sa=D&ust=1568581545876000)

- Purpose
  - Develops standards and support materials to help implement web accessibility
- Organization & History
  - Launched in 1997 with W3C and White House endorsement
  - Works via multiple groups:
    - AGWG: generates WCAG guidelines
    - PFWG: focuses on technologies (e.g. WAI-ARIA)
    - EOWG: education and outreach
- Mission
  - Improve web accessibility globally for people with disabilities and various user agents

### [WebAIM](https://www.google.com/url?q=https://webaim.org/&sa=D&ust=1568581545876000)

- Mission
  - Empower people and organizations to create accessible web content
- Resources & Tools
  - Training: web, document, Zoom
  - Evaluation guidance and WAVE tools
  - Publishes research: WAVE analyses (WebAIM Million), screen reader surveys, salary surveys, strategic frameworks

### [DreamHost – “Make Your Website Accessible”](https://www.google.com/url?q=https://www.dreamhost.com/blog/make-your-website-accessible/&sa=D&ust=1568581545877000)

- Overview
  - Guide covering importance of accessibility, auditing barriers, and designing accessible pages
- Additional Commitment
  - DreamHost commits to accessibility and provides contact for accessibility issues

### [Lifeprint – ASL History](https://www.google.com/url?q=https://www.lifeprint.com/asl101/topics/history8.htm&sa=D&ust=1568581545877000)

- Early Foundations
  - Roots in European sign systems (e.g., 1620 fingerspelling by Juan Pablo Bonet)
  - French Old Sign Language and Old Signed French influence
- American Development
  - Gallaudet and Clerc founded first deaf school in Hartford, Connecticut (1817)
  - By 1857: 19 deaf schools established
  - Gallaudet University founded in 1864
  - Suppression after 1880 Congress of Milan; revival in late 20th century
- Influential Communities
  - Martha’s Vineyard: high Deaf population, widespread MVSL use until 1950s
- ASL Today
  - Educational re-emergence in early 1990s
  - Recognized as a rich, cultural language with European roots and American evolution
