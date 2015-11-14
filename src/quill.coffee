TemplateClass = Template.quill

TemplateClass.rendered = ->
  @quill = new Quill @$('.editor')[0],
    modules:
      toolbar:
        container: @$('.toolbar')[0]
      'link-tooltip': true
      'image-tooltip': true
    theme: 'snow'
