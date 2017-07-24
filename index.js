// {% caniuse feature periods|current %}
function caniuseTagRender(args) {
  if(!args[0]) {
    return '';
  }

  const feature = args[0];
  const periods = args[1] | 'current';

  return `<p class="ciu_embed" data-feature="${feature}" data-periods="${periods}"><a href="http://caniuse.com/#feat=${feature}">Can I Use ${feature}?</a> Data on support for the ${feature} feature across the major browsers from caniuse.com.</p>`;
}

hexo.extend.tag.register('caniuse', caniuseTagRender);

hexo.extend.helper.register('js', function(path){
  return '<script async src="//cdn.jsdelivr.net/caniuse-embed/1.1.0/caniuse-embed.min.js"></script>';
});
