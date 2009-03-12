$.i18n.translate = function(dict) {
  $.i18n.setDictionary(dict);
  $("*[class^='i18n']").each(function() {
    //removeFirstNamespace: function() extend String class?
    text = $(this).attr('class');
    pos  = text.indexOf('-');
    key  = text.slice(pos+1);
    $(this).text($.i18n._(key));
  });
};
