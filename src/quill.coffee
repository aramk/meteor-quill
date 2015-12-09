templateName = 'quill'
TemplateClass = Template[templateName]

TemplateClass.rendered = ->
  @quill = new Quill @$('.editor')[0],
    modules:
      toolbar:
        container: @$('.toolbar')[0]
      'link-tooltip': true
      'image-tooltip': true
    theme: 'snow'
  $quill = @$('.quill')
  $quill.data('quill', @quill)
  value = @data.value
  @quill.setHTML(value) if value?

TemplateClass.helpers
  name: -> @atts.name ? @name

Meteor.startup ->
  AutoForm = Package['aldeed:autoform']?.AutoForm
  return unless AutoForm?
  AutoForm.addInputType 'quill',
    template: templateName
    valueOut: ->
      $quill = $(@)
      $quill.data('quill').getHTML()
