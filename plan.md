# Meghna Jayanarayanan Portfolio — Implementation Plan

## 1. Status and authority

This document is a plan only. It does not authorize implementation, repository creation, publishing, or changes to any existing website.

- Reference repository: `https://github.com/Meghna1215/Work-Portfolio`
- The reference repository is read-only and must not be edited, overwritten, committed to, or redeployed.
- No other existing repository may be changed, including earlier portfolio repositories.
- When Meghna explicitly authorizes implementation, create a completely new repository after confirming its name.
- Do not create `tech.md` unless Meghna later requests it.

## 2. Portfolio objective

Create a refined, responsive Architecture and BIM portfolio that presents Meghna's work through five professional skills rather than named projects:

1. MODEL
2. COORDINATE
3. COLLABORATE
4. VISUALIZE
5. AUTOMATE

The experience must communicate Meghna's strengths clearly to architecture, BIM, infrastructure, coordination, and digital-delivery employers. Revit modelling is the primary skill. Automation is a supporting/developing skill.

## 3. Core editorial rules

- Do not display real project names anywhere on the public website.
- Prohibited names include every identifiable project name supplied in source material or explicitly excluded by Meghna.
- Do not expose client names, employer names, colleague names, usernames, internal model codes, filenames, issue numbers, dates, grid/level codes, or confidential metadata.
- Do not invent projects, responsibilities, results, experience, statistics, or evidence.
- Use neutral placeholder copy and images wherever final material is unavailable.
- Mark missing material clearly with labels such as `Content Pending`, `Image Pending`, `Video Pending`, or `CV Pending`.
- Clearly distinguish actual project material from representative, anonymized, or reconstructed graphics.
- Preserve original source files. Any redaction, optimization, conversion, or metadata cleaning must be performed on copies in the new repository.

## 4. Information architecture

The primary journey is:

`HOME → MY STORY → SKILLS → CONTACT`

Recommended primary navigation:

- Home
- Story
- Skills
- Contact

The Blog must be removed completely from desktop navigation, mobile navigation, markup, content data, styling, scripts, metadata, and documentation.

## 5. Visual direction

### 5.1 Overall character

- Minimal editorial architecture portfolio
- Trendy, classy, futuristic, and professional
- Strong hierarchy without a gaming-inspired or excessively technical appearance
- Cinematic skill transitions while keeping navigation and content understandable
- Restrained use of effects; content remains the focus

### 5.2 Typography

Use a cohesive system of no more than two complementary font families.

Recommended direction:

- Display headings, skill titles, large numbers: **Space Grotesk**
- Body copy, navigation, captions, controls: **DM Sans** or **Manrope**

Final pairing may be confirmed during implementation, but it must follow these rules:

- Home, Story, Skills, detail pages, and Contact must feel like one identity.
- Large skill headings may be distinctive but must not clash with the Home typography.
- Use consistent weights, tracking, line heights, button labels, numbers, and caption styles.
- Remove the current abrupt contrast between the soft Home typography and the very heavy metallic Projects typography.

### 5.3 Colour system

Approved palette:

| Token | Hex | Intended use |
|---|---:|---|
| Bone | `#E6E0D6` | Light backgrounds, primary light text |
| Graphite | `#121212` | Primary dark foundation |
| Midnight Blue | `#1C2430` | Dark architectural surfaces |
| Merlot | `#4B1E23` | Restrained feature colour |
| Olive | `#6B6F4E` | Secondary feature colour |
| Tobacco | `#8A5A2B` | Warm feature colour |

Application:

- Home may remain black/Graphite.
- Make the palette substantially more visible throughout Story, Skills, detail pages, and Contact.
- Use purposeful colour fields, cards, section transitions, numbers, headings, selected states, controls, and hover states.
- Avoid a rainbow effect. Each section should have a controlled colour identity.
- Maintain WCAG-compliant text contrast.

Suggested section rhythm:

- Home: Graphite/black foundation
- Story: Bone and Olive with restrained Merlot/Tobacco accents
- Skills: Midnight foundation with skill-specific palette accents
- Contact: a confident Merlot, Olive, or Tobacco treatment selected after visual testing

## 6. Responsive and accessibility requirements

The website must be intentionally composed for both laptops and phones.

### Laptop and desktop

- Use the available viewport efficiently without making content touch the screen edges.
- Enlarge skill cards based on viewport calculations, not the red reference outline.
- Prioritize readable text and large, legible technical media.
- Preserve the stacked/cinematic skill interaction where it remains usable.

### Phone

- Recompose layouts rather than simply shrinking desktop designs.
- Convert horizontal visual stories into vertical or stepped sequences where necessary.
- Use touch-friendly buttons and media controls.
- Keep text readable without pinch zoom.
- Prevent horizontal page scrolling and clipped content.
- Ensure the full skills structure and navigation remain understandable.

### Accessibility

- Semantic headings and landmarks
- Keyboard-accessible navigation, cards, media, and 3D controls
- Visible focus states
- Descriptive alternative text and captions
- Sufficient colour contrast
- Reduced-motion treatment for entrance, scroll, and hover animation
- No autoplay audio
- A non-interactive fallback/poster and explanatory text for the 3D model

## 7. Shared Skills-page behaviour

Rename the current `PROJECTS` section to **SKILLS**.

Optional supporting label: `Selected practice / How I work`.

Every skill must work at two levels:

### Level 1 — Main Skills page

- The skill title, concise description, visual sequence, and main takeaway must be understandable without clicking.
- Show small but legible previews of all supplied or placeholder media.
- Enlarge the main rectangular cards to make better use of the viewport.
- Reduce excessive empty space while retaining deliberate margins.
- Use the same content hierarchy across all five skill cards.

### Level 2 — Dedicated detail page

- Clicking the skill or an individual media item opens a dedicated page within the same website.
- Do not force a new browser tab.
- Provide a clear `Back to Skills` control.
- Display images at their full aspect ratio and allow clear inspection.
- Use responsive galleries and optional lightbox/fullscreen viewing.
- Load heavy media only when its detail page or viewer is opened.

## 8. Page and content specifications

### 8.1 HOME

Keep the current approved content for now:

- Name: Meghna Jayanarayanan
- Role: BIM Architect & Coordinator
- Existing job description
- Existing hero portrait and composition, subject to responsive refinement

Social and CV controls:

- Replace the plain `in` label with a LinkedIn logo while preserving the existing LinkedIn URL.
- Replace the word `github` with a GitHub logo while preserving the existing GitHub URL.
- Use consistent size, colour, spacing, hover treatment, focus states, and accessible labels.
- Keep `Download CV` as text.
- Until the final CV is supplied, display `CV Pending` and do not link to a missing or invented file.

### 8.2 MY STORY

- Retain space for exactly two story cards/chapters.
- Remove the current four-card structure.
- Story content is pending.
- Use intentional placeholder text and placeholder imagery; do not invent biographical claims.
- Ensure two cards feel balanced on both desktop and mobile.

### 8.3 SKILLS

Order and emphasis:

1. MODEL — primary strength
2. COORDINATE
3. COLLABORATE
4. VISUALIZE
5. AUTOMATE — supporting/developing skill

#### 8.3.1 MODEL

Main-page gallery:

1. Typical Elevated Metro Station — Concourse Level
2. Typical Steel Bridge
3. Typical Viaduct
4. Typical Twin Tunnel Model

Confirmed 3D asset:

- Source: `C:\Users\asus\Downloads\Website\Model\Final files\Station_final.glb`
- Public title: `Typical Elevated Metro Station — Concourse Level`
- Description: `An interactive 3D model of the concourse level of a typical elevated metro station.`

Implementation requirements:

- Use a lightweight poster/thumbnail on the main Skills page.
- Load the GLB only on the MODEL detail page and only when needed.
- Provide rotate, zoom, pan, reset-view, and optional fullscreen controls.
- Show loading progress and a helpful fallback if WebGL is unavailable.
- Inspect file size, textures, geometry, and embedded metadata before publication.
- If optimization is required, optimize a copy and retain the supplied original unchanged.
- Confirm public-display permission before publishing.
- Use placeholders for Steel Bridge, Viaduct, and Twin Tunnel until images are supplied.
- Present the Twin Tunnel strictly as modelling work; never suggest tunnel automation.

#### 8.3.2 COORDINATE

Purpose: tell an editorial story about how clashes are discovered and resolved, without resembling a rigid flowchart.

Sequence:

1. **Test** — multidisciplinary models are checked in Navisworks.
2. **Identify** — a clash is isolated, reviewed, and understood.
3. **Resolve** — the affected model is corrected in Revit and checked again.

Suggested description:

`A multidisciplinary coordination workflow using Navisworks clash detection and Revit-based model resolution.`

Available source images:

- `C:\Users\asus\Downloads\Website\Coordinate\Clash 1.png`
- `C:\Users\asus\Downloads\Website\Coordinate\Clash 2.png`

Missing input:

- Revit resolution image for the third stage; use a labelled placeholder until supplied.

Presentation:

- Use progressive numbering, concise captions, and a clear visual sequence.
- Avoid heavy diagram boxes and excessive arrows.
- Allow images to be inspected at larger size on the detail page.
- Sanitize copies before publication to remove confidential identifiers, dates, codes, and project information.

#### 8.3.3 COLLABORATE

Purpose: communicate the lifecycle of cloud-based model collaboration and issue management.

Sequence:

1. **Cloud Model Shared** — a model/package is published to the common data environment.
2. **Issue Raised and Assigned** — an issue is recorded, assigned, and tracked.
3. **Issue Reviewed and Resolved** — the team responds, updates the model, and verifies closure.

Available reference images:

- `C:\Users\asus\Downloads\Website\Collaborate\Collaborate - 1.png`
- `C:\Users\asus\Downloads\Website\Collaborate\Collaborate - 2.png`
- `C:\Users\asus\Downloads\Website\Collaborate\Collaborate - 3.png`

Confidentiality requirement:

- The supplied screenshots contain prohibited and sensitive names, companies, people, dates, filenames, issue numbers, and internal codes.
- Do not publish the screenshots in their current form.
- Either heavily sanitize copies or recreate clean generic graphics based on the workflow.
- Label reconstructed graphics as representative.
- If no suitable resolved-state source exists, retain a placeholder for the final stage.

#### 8.3.4 VISUALIZE

Content:

- One short walkthrough-video placeholder until the final video is supplied.
- Four selected Twinmotion renders.

Selected renders:

1. `C:\Users\asus\Downloads\Website\Visualize\Options\Igloo Exterior view_Day.jpg`
2. `C:\Users\asus\Downloads\Website\Visualize\Options\Igloo Platform view_Day.jpg`
3. `C:\Users\asus\Downloads\Website\Visualize\Options\Spiral Interior view_Night.jpg`
4. `C:\Users\asus\Downloads\Website\Visualize\Options\Wave Exterior view_Night.jpg`

Public-facing neutral labels:

- Day Exterior
- Platform View
- Night Interior
- Night Exterior

Suggested description:

`Twinmotion visualization studies exploring architectural form, passenger circulation, and the atmosphere of an elevated transit environment.`

Image rules:

- Use the selected files as supplied.
- Do not retouch, recolour, crop destructively, or otherwise alter the source images.
- Preserve the full aspect ratio on the detail page.
- Use responsive sizing and lazy loading.
- The main skill card shows a legible preview collage; the detail page shows the complete images clearly.

#### 8.3.5 AUTOMATE

Positioning:

- Supporting/developing skill, not Meghna's primary claim.
- Use only the confirmed room-skirt/skirting-generation workflow.

Four-stage visual story:

1. **Before** — Revit room without skirting.
2. **Logic** — Dynamo script defining the workflow.
3. **Input** — required room selected in Revit.
4. **Result** — the same room with generated skirting.

Suggested description:

`A focused Dynamo workflow that generates room skirting from a selected Revit room, reducing repetitive modelling steps.`

Current media status:

- All four images are placeholders.
- Ask what Revit element/family type the script creates before writing final technical captions.

### 8.4 CONTACT

- Keep the page simple, direct, and professional.
- Use the approved contact details already confirmed in the portfolio source, subject to a final accuracy check.
- Include LinkedIn and GitHub links consistently with the Home controls.
- CV remains pending until Meghna supplies the updated document.
- Do not introduce a contact form unless requested later.

## 9. Media and performance strategy

- Do not load the GLB on the Home page or main Skills page.
- Lazy-load below-the-fold images and video.
- Reserve media dimensions to prevent layout shifts.
- Use posters for the 3D viewer and walkthrough video.
- Preserve original render files and visual appearance.
- Use appropriately sized delivery assets only when they do not visually alter supplied material and retain originals.
- Ensure skill previews remain lightweight enough for normal mobile connections.
- Test the 3D viewer on mid-range mobile hardware and provide a static fallback.
- Avoid autoplaying the walkthrough; use a clear play control and muted default when video is added.

## 10. Confidentiality checklist

Before any public deployment, check every image, model, caption, filename, alt text, URL, page title, and metadata field for:

- Project names
- Client or company names
- Colleague names
- Usernames or profile initials
- File/model/document names
- Model codes, level names, grid references, and package identifiers
- Dates, issue numbers, and internal status data
- Embedded GLB node, material, texture, and scene metadata
- Accidental project references in SEO and social-sharing metadata

Use generic wording such as `typical`, `representative`, `anonymized`, or `reconstructed` where accurate.

## 11. SEO and metadata

- Title and description should position Meghna as an Architect and BIM Coordinator with Revit modelling as the primary strength.
- Do not use real project names as keywords.
- Provide descriptive page titles for each skill detail page.
- Add appropriate social-preview metadata using approved, non-confidential imagery.
- Use clear heading hierarchy and meaningful link text.

## 12. Proposed implementation phases

### Phase 0 — Approval and content audit

- Confirm this plan.
- Confirm the new repository name.
- Confirm permission to publish supplied model and render assets.
- Review all supplied files for confidentiality risks.

### Phase 1 — New repository

- Create a new repository only after explicit authorization.
- Rebuild or copy the approved foundation without changing any existing repository.
- Establish clean asset folders and routes for skill detail pages.

### Phase 2 — Design foundation

- Implement cohesive typography.
- Apply the approved palette more visibly.
- Remove Blog completely.
- Establish responsive navigation, spacing, focus states, and motion rules.

### Phase 3 — Home and Story

- Preserve approved Home copy and hero direction.
- Replace LinkedIn and GitHub text with accessible icons.
- Keep CV pending.
- Reduce My Story to exactly two placeholder cards.

### Phase 4 — Skills overview

- Rename Projects to Skills.
- Implement larger viewport-aware stacked cards.
- Build summary-first layouts for all five skills.
- Ensure each skill is understandable without opening its detail page.

### Phase 5 — Skill detail pages

- MODEL: interactive 3D viewer and model gallery
- COORDINATE: clash discovery-to-resolution story
- COLLABORATE: cloud issue lifecycle story
- VISUALIZE: walkthrough placeholder and four-render gallery
- AUTOMATE: room-skirt generation story

### Phase 6 — Media safety and performance

- Sanitize/reconstruct confidential screenshots.
- Inspect GLB metadata and performance.
- Add lazy loading, posters, fallbacks, and stable media dimensions.

### Phase 7 — Quality assurance

- Laptop and desktop checks at multiple common sizes
- Phone checks at standard and short viewport heights
- Touch, keyboard, focus, contrast, reduced-motion, and screen-reader checks
- No horizontal overflow or clipped content
- Performance and failed-media testing
- Complete confidentiality audit

### Phase 8 — New-repository publication

- Show the final local version to Meghna.
- Publish only after explicit approval.
- Push only to the newly created repository.
- Verify the live site on laptop and phone.
- Confirm existing repositories remain unchanged.

## 13. Acceptance criteria

The implementation is complete only when all of the following are true:

- Blog is completely removed.
- Navigation and section order are coherent after Blog removal.
- Typography feels cohesive across the entire site.
- The approved palette is clearly visible beyond the Home page.
- Home retains the approved name, role, description, and portrait treatment.
- LinkedIn and GitHub are represented by accessible logos with the existing links.
- CV is visibly pending until supplied and never links to a missing file.
- My Story contains exactly two cards and no invented content.
- Projects is renamed Skills.
- All five skill cards are larger, responsive, and understandable without clicking.
- Every skill has a clear dedicated detail page.
- MODEL includes a lazy-loaded interactive GLB viewer with rotate, zoom, pan, reset, fallback, and clear loading state.
- Steel Bridge, Viaduct, and Twin Tunnel use placeholders until supplied.
- COORDINATE tells a clear Test → Identify → Resolve story.
- COLLABORATE tells a clear Cloud Model → Issue Raised → Issue Resolved story.
- VISUALIZE uses the four selected Twinmotion images without visual alteration and includes a walkthrough placeholder.
- AUTOMATE uses the confirmed four-stage room-skirt workflow and is positioned as supporting/developing.
- No public page or asset exposes a prohibited project name or confidential identifier.
- Representative/reconstructed graphics are labelled accurately.
- The website is fully usable on laptops and phones.
- There is no horizontal page scrolling, clipped core content, or inaccessible interaction.
- Heavy media does not load unnecessarily or make the main website hang.
- No existing repository has been modified.

## 14. Pending inputs

- Final name for the new repository
- Two final My Story texts and any accompanying images
- Updated CV file
- Steel Bridge image
- Viaduct image
- Twin Tunnel image
- COORDINATE Revit resolution image
- COLLABORATE resolved/closed issue image, if available
- Short Twinmotion walkthrough video
- Four AUTOMATE screenshots
- Confirmation of the Revit element/family type created by the Dynamo workflow
- Final permission confirmation for public display of the GLB and supplied render images

## 15. Explicitly out of scope until requested

- Editing or deploying any existing repository
- Creating the new repository before explicit authorization
- Publishing the website
- Inventing missing content or evidence
- Adding a Blog
- Displaying project names
- Altering the supplied Twinmotion renders
- Creating `tech.md`
