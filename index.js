module.exports = {
  hooks: {
    'page': function(page){
      page.content = page.content.replace(/<p>&gt;&gt;&gt;<\/p>/g, '<div style="page-break-before:always"></div>');
      return page;
    }
  }

  }
}
