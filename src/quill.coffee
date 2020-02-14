templateName = 'quill'
TemplateClass = Template[templateName]

import Quill from 'quill'
import 'quill/dist/quill.snow.css';

TemplateClass.rendered = ->
  @quill = new Quill @$('.editor')[0],
    Setter.merge
      modules:
        toolbar: true
      theme: 'snow'
    , @data.atts.options
  $quill = @$('.quill')
  $quill.data('quill', @quill)
  value = @data.value
  @quill.setContents(value) if value?
  {onRender} = @data.atts
  onRender?.apply(@)

TemplateClass.helpers
  name: -> @atts.name ? @name

Meteor.startup ->
  AutoForm = Package['aldeed:autoform']?.AutoForm
  return unless AutoForm?
  AutoForm.addInputType 'quill',
    template: templateName
    valueOut: ->
      $quill = $(@)
      $('.ql-editor', $quill).html()
