<script>
  export let data;
</script>

<h1>Posts</h1>

{#if data.posts.length > 0}
  <ul>
    {#each data.posts as post}
      <li>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <small>Created at: {new Date(post.createdAt).toLocaleString()}</small>
      </li>
    {/each}
  </ul>
{:else}
  <p>No posts available.</p>
{/if}

<form method="POST">
  <input name="title" placeholder="Title" required>
  <textarea name="content" placeholder="Content"></textarea>
  <button type="submit">Create Post</button>
</form>

