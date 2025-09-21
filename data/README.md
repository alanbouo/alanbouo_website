# Projects Data

This folder contains the data files used to populate the Services page with project information.

## Adding New Projects

To add a new project to the Services page, simply add a new object to the `projects.json` file.

### Project Object Structure

Each project should have the following properties:

```json
{
  "id": "unique-project-identifier",
  "title": "Project Title",
  "description": "Brief description of the project and its impact",
  "icon": "fontawesome-icon-name",
  "color": "hex-color-code",
  "tags": ["Tag1", "Tag2", "Tag3"],
  "link": "/projects/project-slug"
}
```

### Field Explanations

- **id**: Unique identifier for the project (used as React key)
- **title**: Display title for the project card
- **description**: Brief description highlighting the project's impact
- **icon**: FontAwesome icon name (without `fa-` prefix)
  - Use `fas` prefix for solid icons (most icons)
  - Use `fab` prefix for brand icons (like `ethereum`)
- **color**: Hex color code for the project theme (used for borders, icons, and tag backgrounds)
- **tags**: Array of technology or impact tags (displayed as badges)
- **link**: URL path to the detailed project page

### Color Options

Common color codes used:
- `#28a745` - Green (for analytics, success metrics)
- `#667eea` - Blue (for infrastructure, security)
- `#8b2e8b` - Purple (for AI/ML, advanced tech)

### Example

```json
{
  "id": "new-ai-tool",
  "title": "New AI Tool",
  "description": "Developed an innovative AI solution that improved efficiency by 40%, using cutting-edge machine learning techniques.",
  "icon": "robot",
  "color": "#28a745",
  "tags": ["AI", "Efficiency +40%", "Machine Learning"],
  "link": "/projects/new-ai-tool"
}
```

### Icon Reference

Common FontAwesome icons used:
- `chart-bar` - Analytics/Data
- `server` - Infrastructure/DevOps
- `search` - SEO/Search
- `robot` - AI/Chatbots
- `shield-alt` - Security/Ethics
- `ethereum` - Blockchain
- `chart-area` - Risk Analytics
- `search-plus` - SEO Tools

The page will automatically update when you add new projects to this JSON file.
