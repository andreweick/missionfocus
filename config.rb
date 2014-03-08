Time.zone = "UTC"

set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'

activate :automatic_image_sizes
activate :directory_indexes
activate :minify_html
activate :minify_css
activate :minify_javascript, compressor: Closure::Compiler.new
activate :gzip

configure :build do
  activate :asset_hash
  activate :cache_buster
  #activate :automatic_image_sizes
  #require "middleman-smusher"
  #activate :smusher
end


# Support for the old Liquid tags
# require "lib/liquid_footnote"


# Multiple Blogs
activate :blog do |blog|
  blog.name              = "Blog"
  blog.layout            = "post"
  blog.paginate          = true
  blog.per_page          = 5
  blog.prefix            = "family"
  blog.permalink         = ":year-:month-:day-:title.html"
  #blog.summary_separator = /(READMORE)/
  #blog.summary_length    = 250
  blog.tag_template      = "tag.html"
  blog.year_template     = "calendar.html"
end
page "/feed.xml", :layout => false
