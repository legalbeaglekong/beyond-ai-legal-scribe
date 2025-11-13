# Sitemap Implementation Guide

## ✅ What's Been Done

1. **Created dynamic sitemap** (`app/sitemap.ts`)
   - Automatically includes all 27 pages
   - Updates when you rebuild
   - Proper priorities and change frequencies

2. **Removed old static sitemap** (`public/sitemap.xml`)
   - Old file was outdated and incomplete

## 📋 Next Steps

### Step 1: Deploy to Vercel

The sitemap is ready to deploy. Push your changes to GitHub:

```bash
git add app/sitemap.ts
git add public/sitemap.xml  # (if it shows as deleted)
git commit -m "Add dynamic sitemap with all 27 pages"
git push origin main
```

Vercel will automatically:
- Build your site
- Generate the sitemap
- Deploy it to production

### Step 2: Verify Sitemap is Live

After deployment (usually 2-3 minutes), check:

1. **Visit the sitemap URL:**
   ```
   https://beyondhorizons.sg/sitemap.xml
   ```

2. **You should see:**
   - 27 URLs total
   - 3 static pages (home, expertise overview, market-insights)
   - 20 expertise detail pages
   - 4 why-choose-us detail pages

3. **Verify it's working:**
   - Open in browser: Should show XML format
   - Check URL count: Should have 27 `<url>` entries
   - Validate format: Use [XML Sitemap Validator](https://www.xml-sitemaps.com/validate-xml-sitemap.html)

### Step 3: Submit to Google Search Console

1. **Go to Google Search Console:**
   - Visit: https://search.google.com/search-console
   - Add property if needed: `https://beyondhorizons.sg`

2. **Submit Sitemap:**
   - Go to **Sitemaps** in left sidebar
   - Enter: `sitemap.xml` (or full URL: `https://beyondhorizons.sg/sitemap.xml`)
   - Click **Submit**

3. **Monitor:**
   - Google will crawl within 24-48 hours
   - Check "Coverage" report to see indexed pages
   - Check "Sitemaps" section for status

### Step 4: Submit to Bing Webmaster Tools (Optional)

1. **Go to Bing Webmaster Tools:**
   - Visit: https://www.bing.com/webmasters
   - Add your site if needed

2. **Submit Sitemap:**
   - Go to **Sitemaps**
   - Enter: `https://beyondhorizons.sg/sitemap.xml`
   - Click **Submit**

## 🔍 Verification Checklist

After deployment, verify:

- [ ] Sitemap accessible at `https://beyondhorizons.sg/sitemap.xml`
- [ ] Contains 27 URLs
- [ ] All expertise pages included
- [ ] All why-choose-us pages included
- [ ] XML format is valid
- [ ] Submitted to Google Search Console
- [ ] No errors in Google Search Console

## 📊 Expected Sitemap Contents

Your sitemap includes:

**Static Pages (3):**
- `/` (priority: 1.0)
- `/expertise` (priority: 0.9)
- `/market-insights` (priority: 0.8)

**Expertise Pages (20):**
- `/expertise/ma-cross-border`
- `/expertise/tech-general-counsel`
- ... (18 more)
- All with priority: 0.8

**Why Choose Us Pages (4):**
- `/why-choose-us/digital-first`
- `/why-choose-us/cost-efficiency`
- `/why-choose-us/global-expertise`
- `/why-choose-us/confidentiality`
- All with priority: 0.7

**Total: 27 URLs**

## 🚀 Future Updates

The sitemap will automatically update when you:
- Add new expertise pages (just add ID to `expertiseIds` array)
- Add new why-choose-us pages (just add ID to `whyChooseUsIds` array)
- Rebuild and redeploy

No manual sitemap updates needed!

## ❓ Troubleshooting

**Sitemap not showing:**
- Wait 2-3 minutes after deployment
- Clear browser cache
- Check Vercel deployment logs

**Google not indexing:**
- Wait 24-48 hours after submission
- Check Google Search Console for errors
- Verify sitemap URL is accessible

**Missing pages:**
- Check `app/sitemap.ts` includes all page IDs
- Rebuild and redeploy

