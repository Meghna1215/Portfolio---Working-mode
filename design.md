# Meghna Jayanarayanan Portfolio — Design Specification

## 1. Document status

This document translates `plan.md` into a visual and interaction system. It is a design specification only and does not authorize website implementation, repository creation, publishing, or edits to an existing repository.

Design precedence:

1. Meghna's latest direct instruction
2. `plan.md`
3. This document

The reference portfolio remains read-only. The approved design will eventually be implemented only in a newly created repository after Meghna gives explicit permission and confirms the repository name.

## 2. Design concept

### 2.1 Working idea

**Architectural clarity with digital depth.**

The site should feel like a carefully composed architectural publication that happens to be interactive. It should not resemble a generic software portfolio, gaming interface, or conventional corporate résumé site.

The visual language combines:

- calm editorial spacing;
- bold but disciplined typography;
- dark architectural surfaces;
- large, legible technical media;
- restrained colour blocking;
- precise numbering and captions;
- cinematic motion used only where it strengthens the story.

### 2.2 Experience principles

1. **Understand first, explore second.** Every skill is understandable on the main page before a visitor opens its detail page.
2. **Media earns space.** Models, screenshots, diagrams, and renders are large enough to inspect rather than serving as decoration.
3. **Colour has purpose.** Each major area has a clear colour identity while remaining part of one system.
4. **Motion explains hierarchy.** Animation reveals sequence and relationships; it never hides essential information.
5. **Mobile is a separate composition.** Phone layouts are redesigned for the available width and touch interaction.
6. **Evidence remains honest.** Placeholders, reconstructed graphics, and anonymized material are visibly identified.

## 3. Brand system

### 3.1 Typography

Use exactly two type families throughout the website.

| Role | Typeface | Use |
|---|---|---|
| Display | **Space Grotesk** | Hero name, page titles, skill titles, large numbers, major calls to action |
| Text | **DM Sans** | Navigation, paragraphs, captions, labels, metadata, controls |

Fallbacks must preserve the same general proportions: a geometric sans-serif for display and a neutral humanist sans-serif for text.

#### Type scale

| Token | Desktop/laptop | Phone | Weight | Typical use |
|---|---:|---:|---:|---|
| Display XL | `clamp(4rem, 7.5vw, 8rem)` | `clamp(2.8rem, 15vw, 4.6rem)` | 600 | Hero name, major page title |
| Display L | `clamp(3rem, 5.5vw, 6rem)` | `clamp(2.3rem, 11vw, 3.6rem)` | 600 | Skills, Story, Contact headings |
| Display M | `clamp(2rem, 3.4vw, 3.8rem)` | `clamp(1.75rem, 8vw, 2.5rem)` | 600 | Skill detail titles |
| Heading S | `clamp(1.3rem, 2vw, 2rem)` | `1.25rem–1.55rem` | 600 | Card and sequence headings |
| Lead | `1.15rem–1.45rem` | `1rem–1.2rem` | 400/500 | Introductory copy |
| Body | `0.95rem–1.05rem` | `0.94rem–1rem` | 400 | Paragraphs |
| Label | `0.68rem–0.78rem` | `0.66rem–0.74rem` | 600 | Metadata, tags, buttons |

#### Typography rules

- Skill names use uppercase with modest tracking, not ultra-condensed lettering.
- Body copy should not exceed approximately 65 characters per line.
- Navigation and labels use DM Sans with consistent weight and spacing.
- Avoid metallic text gradients. Large headings use solid Bone, Graphite, or a section accent.
- Use colour and scale—not unrelated typefaces—to create contrast.
- Do not use more than three font weights on one screen.

### 3.2 Colour palette

#### Core tokens

| Token | Value | Function |
|---|---:|---|
| Bone | `#E6E0D6` | Main light surface and light text |
| Graphite | `#121212` | Main dark surface |
| Midnight | `#1C2430` | Blue-black architectural surface |
| Merlot | `#4B1E23` | Coordination and focused emphasis |
| Olive | `#6B6F4E` | Story/automation and grounded emphasis |
| Tobacco | `#8A5A2B` | Warm highlights and collaboration emphasis |

#### Supporting neutrals

Supporting colours are derived only through opacity from the six approved colours. Do not introduce unrelated greys, bright blues, neon colours, or a separate gold.

- Light line: Bone at 20–28% opacity
- Dark line: Graphite at 18–25% opacity
- Muted light text: Bone at 65–72% opacity
- Muted dark text: Graphite at 60–68% opacity
- Dark overlay: Graphite at 72–88% opacity

#### Section colour map

| Area | Primary surface | Secondary/accent | Text |
|---|---|---|---|
| Header over Home | Transparent/Graphite | Tobacco active marker | Bone |
| Home | Graphite | Tobacco and restrained Merlot | Bone |
| My Story | Bone | Olive + Merlot | Graphite/Bone according to card |
| Skills shell | Midnight | All skill accents | Bone |
| MODEL | Midnight | Tobacco | Bone |
| COORDINATE | Deep Merlot field | Bone | Bone |
| COLLABORATE | Tobacco field | Midnight | Bone |
| VISUALIZE | Bone field | Midnight/Merlot | Graphite |
| AUTOMATE | Olive field | Bone/Tobacco | Bone |
| Contact | Merlot or Tobacco after contrast testing | Bone | Bone |

Colour should occupy meaningful surfaces, not appear only as tiny borders. At the same time, a screen should have one dominant background, one primary text colour, and no more than two accents.

### 3.3 Spacing

Use an 8-point rhythm with selected half-steps.

`4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128`

Responsive page gutters:

- Wide desktop: `clamp(64px, 5vw, 96px)`
- Laptop: `clamp(32px, 4vw, 64px)`
- Tablet: `28px–40px`
- Phone: `16px–20px`

Maximum content width: approximately `1680px`, centred. Skill media may use more width than text but must remain within the page gutter.

### 3.4 Shape and borders

- Skill outer card radius: 22–26px desktop, 16–20px phone
- Media radius: 12–16px desktop, 10–12px phone
- Pills/tags: fully rounded
- Standard border: 1px using the relevant line token
- Avoid excessive nested rounded rectangles
- Use straight editorial dividers for sequencing; use rounded shells only for primary containers and media

### 3.5 Depth

Depth should be subtle:

- Dark-card shadow: soft black shadow with low opacity and a broad blur
- Hovered media: small increase in border contrast and a 2–4px lift
- No glowing text, large neon halos, or heavy glassmorphism
- Header backdrop blur is permitted only after scrolling over content

## 4. Global layout

### 4.1 Header

#### Desktop/laptop

- Fixed height: approximately 76–84px
- Logo `MJ.` aligned to the left page gutter
- Navigation aligned right: `Home / Story / Skills / Contact`
- Active item indicated with a short Tobacco underline or side marker
- Header begins transparent over Home and gains a dark translucent background after scrolling
- Maintain a minimum 44px interaction height for all links

#### Phone

- Height: approximately 64–72px
- Logo left, circular menu control right
- Full-screen Graphite menu overlay with four large links
- Menu colours remain restrained; use palette accents as markers rather than colouring every link differently
- Focus is trapped inside the open menu and returned to the trigger on close

### 4.2 Main page rhythm

Each main section begins with:

1. small eyebrow/index;
2. strong heading;
3. short lead or instruction where needed;
4. primary content.

Sections should feel connected by controlled shifts in colour and scale. Avoid placing every section inside an identical centred box.

### 4.3 Footer

- Compact Graphite footer
- Name/discipline on the left
- copyright and `Back to top` on the right
- LinkedIn and GitHub may repeat as icons
- No Blog link

## 5. HOME design

The existing three-part hero composition remains the basis.

### 5.1 Desktop/laptop composition

```text
┌──────────────────────────────────────────────────────────────┐
│ MJ.                                        HOME STORY SKILLS… │
│                                                              │
│ NAME / SOCIALS       PORTRAIT       ROLE / DESCRIPTION       │
│ Meghna               full-height    BIM Architect &          │
│ Jayanarayanan        cutout          Coordinator              │
│ [LinkedIn] [GitHub]                  short approved copy      │
│ CV PENDING                           MY STORY →               │
└──────────────────────────────────────────────────────────────┘
```

- Minimum height: one viewport on standard laptop screens
- Three-column ratio: approximately `1fr / 0.78fr / 1fr`
- Portrait remains the centre anchor and must not be hidden behind text
- Name uses Space Grotesk, not a separate decorative font
- Role is visually strong but smaller than the name
- Description is limited to a readable width
- Tobacco is used for the name accent, active navigation, rule, or link—not for every text element

### 5.2 Social and CV controls

- LinkedIn and GitHub use recognizable monochrome icons
- Visual icon size: 22–24px; tap target: at least 44px
- Default: Bone at approximately 80% opacity
- Hover/focus: Bone at 100% with a Tobacco underline or circular field
- Include visible keyboard focus and accessible names
- `CV Pending` remains a text control with disabled styling and no broken destination

### 5.3 Phone composition

Order:

1. Name
2. Social icons and CV Pending
3. Portrait
4. Role
5. Description
6. My Story link

The hero may exceed one viewport on short phones rather than clipping content. Preserve comfortable vertical spacing and keep the portrait proportional.

### 5.4 Home motion

- Name enters from the left with a subtle fade
- Portrait reveals vertically using a mask
- Role/copy enters from the right or fades upward
- Stagger is short and calm; total sequence approximately 900–1200ms
- Do not replay aggressively on minor scroll movement
- Reduced motion: all content appears immediately

## 6. MY STORY design

### 6.1 Desktop/laptop

- Bone section background
- Large `MY STORY` heading in Graphite
- Exactly two cards placed side by side
- Card 01 uses Olive with Bone text
- Card 02 uses Merlot with Bone text
- Cards use an editorial ratio rather than four equal tiles; recommended split is approximately 56% / 44%
- Both cards remain similar in height and carry consistent number/title/body/media zones

```text
┌──────────────────────────────────────────────────────────────┐
│ 01 — BACKGROUND                          MY STORY             │
│                                                              │
│ ┌────────────────────────────┐ ┌───────────────────────────┐ │
│ │ 01                         │ │ 02                        │ │
│ │ CONTENT PENDING            │ │ CONTENT PENDING           │ │
│ │ neutral image placeholder  │ │ neutral image placeholder │ │
│ └────────────────────────────┘ └───────────────────────────┘ │
└──────────────────────────────────────────────────────────────┘
```

### 6.2 Phone

- Cards stack vertically
- Card 01 then Card 02; no horizontal dragging is required
- Each placeholder keeps a visible label and intended image area
- Do not invent story text to fill visual space

## 7. SKILLS overview design

### 7.1 Section identity

- Main heading: `SKILLS`
- Eyebrow: `SELECTED PRACTICE / 01—05`
- Background: Midnight
- Heading: solid Bone, with no metallic gradient
- Instruction: `Scroll to explore` on desktop; `Swipe or scroll` only where useful on touch devices

### 7.2 Viewport-aware skills reel

The five skills form one pinned, viewport-aware accordion/stack. The frame remains stable while the active skill expands and the next skill takes over.

Requirements:

- All five skill headings remain visible in the composition whenever viewport height allows.
- The active card receives the remaining available height.
- Collapsed rows remain large enough to read and activate.
- The entire component is calculated from available viewport height below the fixed header.
- The main card is significantly larger than in the reference repository but retains deliberate outer breathing room.
- Short-height laptop rules reduce secondary copy before reducing media legibility.

Recommended dimensions:

- Reel width: `calc(100vw - 2 × page gutter)`, capped near 1680px
- Desktop collapsed row: approximately 54–64px
- Short laptop collapsed row: approximately 46–52px
- Phone collapsed row: approximately 44–52px
- Active content uses the remainder; no fixed pixel height that causes clipping

### 7.3 Shared card anatomy

```text
┌──────────────────────────────────────────────────────────────┐
│ 01   MODEL                         REVIT MODELLING            │
├──────────────────────┬───────────────────────────────────────┤
│ Concise lead         │                                       │
│ 2–3 line description │          skill-specific media          │
│ tags / detail link   │       previews and story              │
│                      │                                       │
└──────────────────────┴───────────────────────────────────────┘
```

Desktop/laptop active-card grid:

- Copy: approximately 28–34%
- Media: approximately 66–72%
- Copy aligns vertically to the middle or upper third
- Media fills the available height without obscuring labels

Phone active-card grid:

- Title row
- One-sentence lead
- Media/story area
- `View details` control
- Secondary paragraph and tags may be shortened or omitted from the overview but remain on the detail page

### 7.4 Card interaction

- Scroll progress transfers height from the current card to the next
- Previous skill collapses as the next expands
- Clicking a collapsed title moves the reel to that skill
- Keyboard users can activate each title using Enter or Space
- Active state is announced programmatically
- Media tiles have a separate `View full`/accessible link to the detail page
- No nested scroll trap inside the primary reel

### 7.5 Skill colour assignments

- MODEL: Midnight body with Tobacco detail accents
- COORDINATE: Merlot body with Bone dividers
- COLLABORATE: Tobacco body with Midnight media frames
- VISUALIZE: Bone body with Graphite text and Merlot selection accents
- AUTOMATE: Olive body with Bone text and Tobacco input/output accents

The active field may use the full assigned colour. Collapsed rows use dark neutral surfaces with a narrow skill-colour marker.

## 8. Skill-specific overview layouts

### 8.1 MODEL overview

Media arrangement on laptop:

```text
┌────────────────────────────┬──────────────────┐
│                            │ Station / 3D     │
│  STATION MODEL POSTER      ├──────────────────┤
│  primary tile              │ Steel Bridge     │
│  play/3D indicator         ├──────────────────┤
│                            │ Viaduct / Tunnel │
└────────────────────────────┴──────────────────┘
```

Refine the small-tile arrangement according to available height, but all four items must be identifiable.

- The station model is the dominant tile
- Show a subtle `Interactive 3D` label and orbit icon
- Steel Bridge, Viaduct, and Twin Tunnel show labelled placeholders until supplied
- Main overview uses a poster only; never initialize the GLB here
- On phone, show the station poster first and a three-item preview strip beneath it

### 8.2 COORDINATE overview

Use a three-act editorial strip rather than a formal flowchart.

```text
01 TEST              02 IDENTIFY           03 RESOLVE
[sanitized image]    [sanitized image]     [placeholder]
Run clash test       Review issue          Correct in Revit
```

- One act may be slightly larger to create rhythm
- Fine connecting rules or progress numbers are acceptable
- Avoid large arrows, process diamonds, or corporate flowchart styling
- Use only sanitized source copies
- Phone: vertically stacked acts with a continuous number rule on the left

### 8.3 COLLABORATE overview

Use a calm cloud-workflow narrative:

```text
01 CLOUD MODEL       02 ISSUE RAISED       03 RESOLVED
[generic/sanitized]  [generic/sanitized]   [placeholder]
```

- Prefer reconstructed, anonymized graphics if sanitizing the original interfaces would leave distracting gaps
- Use a small label: `Representative cloud collaboration workflow`
- The public interface must contain no identifiable project, organization, person, file, date, or issue data
- Phone: vertical sequence with compact captions

### 8.4 VISUALIZE overview

Use a cinematic media collage:

```text
┌────────────────────────────┬───────────────┐
│ WALKTHROUGH                │ Day Exterior  │
│ VIDEO PENDING              ├───────────────┤
│ 16:9 dominant tile         │ Platform View │
├──────────────┬─────────────┴───────────────┤
│Night Interior│ Night Exterior              │
└──────────────┴─────────────────────────────┘
```

- Preserve the four supplied renders exactly as supplied
- Use 16:9 frames so the images require no crop
- Show full images with `object-fit: contain` where necessary
- Video tile is visibly pending and never mimics a playable control until video exists
- Phone: video placeholder first, then a two-column render grid or single-column list depending on width

### 8.5 AUTOMATE overview

Use a four-frame storyboard:

```text
01 BEFORE   02 LOGIC   03 INPUT   04 RESULT
[pending]   [pending]  [pending]  [pending]
```

- Before and Result should visually bookend the story
- Logic and Input may be smaller intermediate panels on desktop
- Use restrained connecting lines or progressive numbering
- Add `Developing skill` near the title, not as a disclaimer over every frame
- Phone: stack four compact stages vertically

## 9. Skill detail-page system

### 9.1 Shared layout

Every detail page uses the same structure:

1. Fixed global header
2. `Back to Skills` breadcrumb/control
3. Skill index, title, descriptor, and short introduction
4. Primary media/story module
5. Supporting gallery or sequence
6. Contribution/technology notes only when confirmed
7. Previous/next skill navigation
8. Compact footer

Desktop intro layout: title left, concise description/metadata right. Phone intro stacks in reading order.

### 9.2 MODEL detail page

- Midnight surface with Bone controls
- 3D viewer is the dominant module
- Recommended viewer height: 62–72svh on laptop, 52–62svh on phone
- Viewer frame uses a 16px radius and minimal chrome
- Controls: rotate/orbit, pan, zoom, reset, fullscreen, help
- Manual control by default; no forced auto-rotation
- Visible loading percentage/progress and poster before load
- Static poster plus description if WebGL or model loading fails
- Below the viewer: Steel Bridge, Viaduct, and Twin Tunnel gallery tiles, using placeholders until supplied
- Keep technical instructions concise and visible near the controls

### 9.3 COORDINATE detail page

- Merlot section colour with Bone text
- Three large acts arranged in a vertical editorial narrative
- Laptop: alternate image and text alignment for visual progression
- Phone: one continuous single column
- Each image may open in an accessible full-screen lightbox
- Identify source material as anonymized where relevant

### 9.4 COLLABORATE detail page

- Tobacco/Midnight combination
- Three large lifecycle stages with an understated timeline marker
- Representative/reconstructed label remains visible near the sequence
- Explanatory text focuses on collaboration behaviour, not named projects
- Images or reconstructions open at readable size

### 9.5 VISUALIZE detail page

- Bone background with Graphite text
- Walkthrough placeholder at the top in a full 16:9 frame
- Four selected renders below in a balanced two-column grid on laptop
- Single-column full-width renders on phone
- Clicking a render opens a full-screen viewer that preserves the complete image
- Captions use only neutral labels; do not publish internal option filenames
- Include `Rendered in Twinmotion` as confirmed context

### 9.6 AUTOMATE detail page

- Olive background with Bone text
- Four-stage sequence uses large image frames and clear captions
- Laptop: horizontal overview followed by expanded vertical stages
- Phone: vertical sequence only
- All stages remain labelled `Image Pending` until supplied
- Include only the confirmed room-selection and skirting-generation claim

## 10. CONTACT design

- Simple final section with no form
- Strong colour field—prefer Merlot after contrast validation
- Large `LET'S CONNECT.` heading in Space Grotesk
- Short approved availability statement
- Email, LinkedIn icon, GitHub icon, and `CV Pending`
- Laptop: heading left, details right
- Phone: single column with large, well-spaced touch targets
- Avoid decorative content that competes with the call to contact

## 11. Placeholder system

Placeholders must look deliberate but clearly unfinished.

### 11.1 Visual treatment

- Use the skill's surface colour with a low-contrast architectural grid or simple CSS line geometry
- Add a small index in the upper-left corner
- Place the intended content label near the lower-left
- Add a clear status line: `IMAGE PENDING`, `VIDEO PENDING`, or `CONTENT PENDING`
- Show the intended aspect ratio in small metadata where useful
- Do not use stock imagery that could be mistaken for Meghna's work

### 11.2 Copy treatment

- Placeholder text describes what belongs there, not fabricated content
- Example: `Revit resolution view — image pending`
- Avoid lorem ipsum on any public-facing preview

## 12. Image and media presentation

- Preserve the supplied Twinmotion render files visually and proportionally
- Do not apply filters, recolouring, AI enhancement, destructive crops, or overlays that obscure the image
- Captions and controls sit outside the original image frame
- Use lazy loading for below-the-fold media
- Reserve dimensions before load to prevent layout shift
- Use clear loading and failure states
- Fullscreen/lightbox close controls must be keyboard- and touch-accessible
- Do not autoplay the future walkthrough; initial state is a poster with an explicit play action
- Video begins muted unless the user chooses otherwise

## 13. Iconography and controls

- Use recognizable LinkedIn and GitHub brand icons from a consistent icon source
- General interface icons use a simple rounded-line family
- Icon stroke/weight should visually match DM Sans labels
- Controls always include accessible names; important actions include visible text where ambiguity is possible
- Minimum target size: 44 × 44px
- Primary action: filled or high-contrast outline using the section accent
- Secondary action: subtle outline
- Disabled/pending action: reduced contrast, no misleading hover, and explanatory label

## 14. Motion specification

### 14.1 Timing

| Motion | Duration | Easing |
|---|---:|---|
| Micro hover/focus | 160–220ms | ease-out |
| Card/media reveal | 400–650ms | editorial ease-out |
| Hero entrance sequence | 900–1200ms total | smooth cubic-bezier |
| Detail-page transition | 250–400ms | ease-out |

### 14.2 Skills scroll motion

- Keep the skills frame pinned while scroll progress transfers emphasis to the next row
- Active body reveals through height, opacity, and a restrained vertical mask
- Avoid scaling the whole page or rotating cards in 3D
- Media remains visually stable while the card opens
- Completed rows accumulate above the active row; upcoming rows remain below
- The outer section background does not flash between colours; skill colour transitions are contained within the card field

### 14.3 Reduced motion

When reduced motion is requested:

- Remove entrance translations, masks, and smooth-scroll scrubbing
- Present skills as a normal vertical list of expanded summary cards
- Keep all detail links and media available
- Do not auto-rotate the 3D model

## 15. Responsive behaviour matrix

| Area | Wide/laptop | Tablet | Phone |
|---|---|---|---|
| Header | Horizontal nav | Compact horizontal or menu | Menu overlay |
| Home | Three columns | Two-stage grid | One column |
| Story | Two editorial cards | Two equal cards | Vertical stack |
| Skills | Pinned expanding reel | Pinned if height permits | Compact reel or vertical fallback |
| Active skill | Copy + media columns | Narrow copy + media | Lead + media stack |
| Detail intro | Two columns | Two columns | One column |
| Visual sequences | Horizontal/editorial | Flexible grid | Vertical sequence |
| Visualize gallery | Two columns | Two columns | One column |
| 3D viewer | 62–72svh | 58–68svh | 52–62svh |
| Contact | Two columns | Two columns | One column |

Test compositions at minimum:

- 1920 × 1080
- 1440 × 900
- 1366 × 768
- 1024 × 768
- 430 × 932
- 390 × 844
- 360 × 640

Short-height modes must prioritize the active media, collapse nonessential overview copy, and keep every skill heading reachable.

## 16. Accessibility details

- One page-level `h1`; logical heading order thereafter
- Skip link visible on focus
- Active navigation not communicated by colour alone
- Skill headings expose expanded/collapsed state
- Every image includes accurate alt text based on confirmed content
- Decorative placeholders are hidden from assistive technology only when an adjacent label conveys the same status
- Lightbox supports Escape, focus trapping, previous/next controls, and focus restoration
- 3D viewer includes concise keyboard/touch instructions and a textual alternative
- Status such as loading, error, or pending is announced appropriately
- Text contrast target: WCAG AA or better
- Focus ring: 2px high-contrast outline with sufficient offset

## 17. Confidentiality presentation

- Sanitized material receives a small `Anonymized project material` caption
- Rebuilt interfaces receive `Representative workflow graphic`
- Placeholders receive `Source media pending`
- Never place redaction blocks over sensitive screenshots as the final aesthetic if a clean reconstruction is more readable
- Public captions, image filenames, alt text, page slugs, metadata, and structured data must remain generic
- No prohibited names listed in `plan.md` may appear on the public site

## 18. Design acceptance checklist

The design is approved for implementation when:

- Home retains its successful composition while using the unified type system
- LinkedIn and GitHub appear as accessible icons
- Blog is absent from every layout
- My Story contains exactly two intentional cards
- `SKILLS` replaces `PROJECTS`
- All five skills are understandable from the overview
- Skill cards are visibly larger and use the viewport efficiently
- Each skill has a defined responsive detail page
- MODEL clearly prioritizes the interactive station model without loading it on the overview
- COORDINATE and COLLABORATE read as visual stories rather than rigid flowcharts
- VISUALIZE presents the four approved renders without altering them
- AUTOMATE reads as a four-stage supporting workflow
- The full palette is visible while every screen remains controlled
- Typography is cohesive across all sections
- Laptop and phone compositions are both complete
- Motion has a functional reduced-motion alternative
- Confidential and placeholder material is labelled honestly
- No design decision requires changes to an existing repository

## 19. Items still awaiting content, not design

The design can proceed using placeholders for:

- Two My Story texts and images
- Updated CV
- Steel Bridge, Viaduct, and Twin Tunnel images
- COORDINATE Revit resolution image
- COLLABORATE resolved-state material
- Walkthrough video
- Four AUTOMATE screenshots

These missing assets should not delay approval of the visual system.
