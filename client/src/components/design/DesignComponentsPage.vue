<template>
  <app-page name="design-components">
    <ly-text-container>
      <h1>Components</h1>

      <p>Components are bricks of the interface. You can see them as Lego
      bricks you put together to build a bigger construction.</p>

      <p>The most atomic components are prepended by <code>ly-</code> (short
      for <strong>L</strong>ess<strong>y</strong>). Always try to use these
      components instead of the too-generic <code>div</code> and <code>span</code>
      tags when you are not designing a ly-component.</p>

      <p>There are also <code>app-</code> components that are used to build the
      general layout. You might find interesting to have a look to them but if
      you are not designing a new page, you should not have to worry about
      them.</p>

      <h2>ly-button</h2>

      <p>Buttons execute an action or change state of application. For
      instance, it can be a submit button or a button that displays a hidden
      input. Please always provide a text label.</p>

      <h3>Primary</h3>
      <p>Primary buttons draw attention to a specific action. Try to limit one
      primary button per view.</p>

      <ly-button type="primary">Submit</ly-button>

      <h3>Default</h3>
      <p>Default buttons are used for secondary actions when combined with a
      primary button.</p>

      <ly-button>Reset</ly-button>

      <h3>Ghost</h3>
      <p>Ghost buttons are similar to default buttons but with a less impactant
      design. Its background is adapted from its parents' background.</p>

      <ly-button type="ghost">Reset</ly-button>

      <h3>Icon</h3>
      <p>You can provide an icon for a more visual impacted button.</p>

      <ly-button icon="search">Search</ly-button>

      <h2>ly-card</h2>
      <p>Cards are a content container. They can be used to present different
      kind of information such as text, images or more complex components.</p>

      <ly-card>
        Veniam quae corporis consequatur aliquam. Aut vero blanditiis enim.
        Enim expedita aut ut debitis voluptatem eveniet blanditiis sint.
        Corporis a placeat et quos officia pariatur est at. Qui illo commodi
        rerum et maxime odio. Nostrum praesentium sint magni ipsum.
      </ly-card>

      <h3>Image</h3>
      <p>You can provide an image to illustrate a card. Be careful when you use
      images since it has a strong impact on interface.</p>

      <ly-card class="text-on-dark" image="/static/visuals.jpg">
        Veniam quae corporis consequatur aliquam.<br />
        Aut vero blanditiis enim.<br />
        Enim expedita aut ut debitis voluptatem eveniet blanditiis sint.<br />
      </ly-card>

      <h2>ly-card-deck</h2>
      <p>Cards can be grouped per deck if they present similar information. All
      cards of a deck have the same height.</p>

      <ly-card-deck>
        <ly-card>
          Veniam quae corporis consequatur aliquam. Aut vero blanditiis enim.
          Enim expedita aut ut debitis voluptatem eveniet blanditiis sint.
        </ly-card>
        <ly-card>
          Corporis a placeat et quos officia pariatur est at.
        </ly-card>
      </ly-card-deck>

      <h2>ly-icon</h2>
      <p>Use icons to add visual help to user. Icons must be used carefully and
      always be accompanied by a text alternative.</p>

      <p>
        <ly-icon name="question-circle"></ly-icon>
        What's new?
      </p>

      <p>You can indicate a task is processing with the <code>circle-o-notch</code>
      icon and by making it rotating with the <code>spin</code> attribute.</p>

      <ly-icon name="circle-o-notch" size="2" spin></ly-icon>

      <h2>ly-text-container</h2>
      <p>Text container is used to make sure width of text lines follows
      <router-link to="/design/typography">typography rules</router-link>. This
      page is wrapped in this component.</p>

      <p>Use the <code>margined</code> attribute to center the text block.</p>
    </ly-text-container>
  </app-page>
</template>
