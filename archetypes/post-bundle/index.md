---
title: "nameOfDesigner"
description: " Put bio here "
type: "post"
image = url("images/putBioPhotoNameHere.jpeg")
---

{{ with .Resources.Match "images/*.jpeg" }}
	<div class="portfolio-choice">
	{{ range . }}
		<img src="{{ .RelPermalink }}">
	{{ end }}
	</div>
{{ end }}
