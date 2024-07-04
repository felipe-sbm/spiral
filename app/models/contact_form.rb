class ContactForm < MailForm::Base
    attribute :name, validate: true
    attribute :email, validate: /\A([\w+\-].?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i
    attribute :message, validate: true
  
    def headers
      {
        subject: "Contact Form Message",
        to: "site-email@example.com",
        from: %("#{name}" <#{email}>)
      }
    end
end
  