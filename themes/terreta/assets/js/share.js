async function shareImage(event, title, imageUrl) {
  event.preventDefault();

  if (!navigator.share) {
    window.location.href = imageUrl;
    return;
  }

  try {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    const file = new File([blob], "image.jpg", { type: blob.type });

    await navigator.share({
      title: title,
      text: title,
      files: [file],
    });
  } catch (error) {
    console.error("Error sharing:", error);
    window.location.href = imageUrl;
  }
}
